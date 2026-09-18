import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PERSONAS_DEMO } from '../../shared/models/persona';

/**
 * En Angular moderno los componentes son standalone por defecto.
 * Declarás explícitamente lo que importás (DatePipe, otros componentes, etc.).
 */
@Component({
  selector: 'app-standalone-page',
  imports: [DatePipe],
  templateUrl: './standalone.html',
  styleUrl: './standalone.scss',
})
export class StandalonePage {
  protected readonly persona = PERSONAS_DEMO[1];
  protected readonly ahora = new Date();
}
