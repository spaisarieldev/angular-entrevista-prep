import { Component, signal } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-signals-page',
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class SignalsPage {
  protected readonly personas = signal<Persona[]>([...PERSONAS_DEMO]);
  protected readonly seleccionId = signal<number | null>(null);

  protected seleccionar(id: number): void {
    this.seleccionId.set(id);
  }

  protected toggleActiva(id: number): void {
    this.personas.update((lista) =>
      lista.map((p) => (p.id === id ? { ...p, activa: !p.activa } : p)),
    );
  }
}
