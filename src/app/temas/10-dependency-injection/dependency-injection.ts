import { Component, inject } from '@angular/core';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-dependency-injection-page',
  templateUrl: './dependency-injection.html',
  styleUrl: './dependency-injection.scss',
})
export class DependencyInjectionPage {
  private readonly personasService = inject(PersonaService);

  protected readonly personas = this.personasService.listar();
  protected readonly ana = this.personasService.porId(1);
}
