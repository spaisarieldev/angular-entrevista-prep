import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-forms-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class FormsPage {
  private readonly fb = new FormBuilder();

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', Validators.required],
    edad: [18, [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    rol: this.fb.nonNullable.control<Persona['rol']>('user'),
    activa: [true],
  });

  protected creada: Persona | null = null;

  protected guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.creada = {
      id: Date.now(),
      ...value,
    };
    this.form.reset({
      nombre: '',
      apellido: '',
      edad: 18,
      email: '',
      rol: 'user',
      activa: true,
    });
  }
}
