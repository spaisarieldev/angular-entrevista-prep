import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-persona-card',
  imports: [FormsModule],
  template: `
    <article class="card">
      <h3>{{ persona().nombre }} {{ persona().apellido }}</h3>
      <p>Edad (input readonly-ish): {{ edad() }}</p>

      <label>
        Nombre (model two-way):
        <input [ngModel]="nombre()" (ngModelChange)="nombre.set($event)" />
      </label>

      <button type="button" (click)="seleccionada.emit(persona())">Seleccionar</button>
    </article>
  `,
  styles: `
    .card {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 1rem;
      display: grid;
      gap: 0.75rem;
      max-width: 24rem;
    }
  `,
})
export class PersonaCard {
  /** input() — datos que entran del padre */
  readonly persona = input.required<Persona>();
  readonly edad = input<number>(0);

  /** model() — two-way binding moderno */
  readonly nombre = model.required<string>();

  /** output() — evento hacia el padre */
  readonly seleccionada = output<Persona>();
}

@Component({
  selector: 'app-input-output-model-page',
  imports: [PersonaCard],
  templateUrl: './input-output-model.html',
  styleUrl: './input-output-model.scss',
})
export class InputOutputModelPage {
  protected persona: Persona = { ...PERSONAS_DEMO[0] };
  protected seleccion: Persona | null = null;

  protected onSeleccionada(p: Persona): void {
    this.seleccion = p;
  }
}
