import { Injectable } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Injectable({ providedIn: 'root' })
export class PersonaService {
  private readonly data = [...PERSONAS_DEMO];

  listar(): Persona[] {
    return [...this.data];
  }

  porId(id: number): Persona | undefined {
    return this.data.find((p) => p.id === id);
  }
}
