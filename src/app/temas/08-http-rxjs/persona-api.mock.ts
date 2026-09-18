import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

/** Simula un backend HTTP con personas. */
@Injectable({ providedIn: 'root' })
export class PersonaApiMock {
  getPersonas(): Observable<Persona[]> {
    return of([...PERSONAS_DEMO]).pipe(delay(400));
  }
}
