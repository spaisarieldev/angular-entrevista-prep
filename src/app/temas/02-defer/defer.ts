import { Component } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-defer-page',
  templateUrl: './defer.html',
  styleUrl: './defer.scss',
})
export class DeferPage {
  protected readonly persona: Persona = PERSONAS_DEMO[0];
}
