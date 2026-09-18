import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, min, minLength, required } from '@angular/forms/signals';
import { Persona } from '../../shared/models/persona';

type PersonaFormModel = Omit<Persona, 'id'>;

@Component({
  selector: 'app-signal-forms-page',
  imports: [FormField, JsonPipe],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalFormsPage {
  /** Modelo reactivo: la fuente de verdad del formulario. */
  protected readonly personaModel = signal<PersonaFormModel>({
    nombre: '',
    apellido: '',
    edad: 18,
    email: '',
    activa: true,
    rol: 'user',
  });

  /**
   * Signal Forms: `form(model, schema)` crea un FieldTree.
   * Cada campo se bindea con [formField] (no formControlName).
   */
  protected readonly personaForm = form(this.personaModel, (s) => {
    required(s.nombre, { message: 'Nombre obligatorio' });
    minLength(s.nombre, 2, { message: 'Mínimo 2 caracteres' });
    required(s.apellido, { message: 'Apellido obligatorio' });
    required(s.edad, { message: 'Edad obligatoria' });
    min(s.edad, 1, { message: 'Edad inválida' });
    required(s.email, { message: 'Email obligatorio' });
    email(s.email, { message: 'Email inválido' });
    required(s.rol, { message: 'Rol obligatorio' });
  });

  protected creada: Persona | null = null;

  protected guardar(event: Event): void {
    event.preventDefault();

    if (this.personaForm().invalid()) {
      return;
    }

    this.creada = {
      id: Date.now(),
      ...this.personaModel(),
    };

    this.personaModel.set({
      nombre: '',
      apellido: '',
      edad: 18,
      email: '',
      activa: true,
      rol: 'user',
    });
  }
}
