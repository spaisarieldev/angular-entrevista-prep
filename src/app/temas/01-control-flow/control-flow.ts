import { Component } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlowPage {
  protected readonly personas: Persona[] = PERSONAS_DEMO;
  protected filtro: 'todas' | 'activas' | 'inactivas' = 'todas';

  protected get filtradas(): Persona[] {
    if (this.filtro === 'activas') {
      return this.personas.filter((p) => p.activa);
    }
    if (this.filtro === 'inactivas') {
      return this.personas.filter((p) => !p.activa);
    }
    return this.personas;
  }
}
