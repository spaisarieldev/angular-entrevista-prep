import { Directive, HostBinding, Input, Pipe, PipeTransform } from '@angular/core';
import { Component } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Pipe({ name: 'nombreCompleto' })
export class NombreCompletoPipe implements PipeTransform {
  transform(persona: Persona): string {
    return `${persona.apellido.toUpperCase()}, ${persona.nombre}`;
  }
}

@Directive({
  selector: '[appResaltarActiva]',
})
export class ResaltarActivaDirective {
  @Input({ alias: 'appResaltarActiva' })
  set activa(value: boolean) {
    this.isActiva = value;
  }

  @HostBinding('class.resaltada')
  isActiva = false;
}

@Component({
  selector: 'app-pipes-directives-page',
  imports: [NombreCompletoPipe, ResaltarActivaDirective],
  templateUrl: './pipes-directives.html',
  styleUrl: './pipes-directives.scss',
})
export class PipesDirectivesPage {
  protected readonly personas = PERSONAS_DEMO;
}
