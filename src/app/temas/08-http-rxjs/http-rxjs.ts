import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Persona } from '../../shared/models/persona';
import { PersonaApiMock } from './persona-api.mock';

@Component({
  selector: 'app-http-rxjs-page',
  imports: [AsyncPipe],
  templateUrl: './http-rxjs.html',
  styleUrl: './http-rxjs.scss',
})
export class HttpRxjsPage {
  private readonly api = inject(PersonaApiMock);

  /** Ejemplo: traer personas y quedarnos solo con activas (map + filter lógico). */
  protected readonly activas$: Observable<Persona[]> = this.api
    .getPersonas()
    .pipe(map((lista) => lista.filter((p) => p.activa)));
}
