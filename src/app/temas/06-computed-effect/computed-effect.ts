import { Component, computed, effect, signal } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-computed-effect-page',
  templateUrl: './computed-effect.html',
  styleUrl: './computed-effect.scss',
})
export class ComputedEffectPage {
  protected readonly personas = signal<Persona[]>([...PERSONAS_DEMO]);
  protected readonly soloActivas = signal(true);
  protected readonly log = signal<string[]>([]);

  protected readonly visibles = computed(() => {
    const lista = this.personas();
    return this.soloActivas() ? lista.filter((p) => p.activa) : lista;
  });

  protected readonly cantidad = computed(() => this.visibles().length);

  constructor() {
    effect(() => {
      const msg = `Visibles: ${this.cantidad()} personas`;
      this.log.update((prev) => [msg, ...prev].slice(0, 5));
    });
  }

  protected toggleFiltro(): void {
    this.soloActivas.update((v) => !v);
  }
}
