import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PERSONAS_DEMO } from '../../shared/models/persona';

@Component({
  selector: 'app-routing-guards-page',
  imports: [RouterLink],
  templateUrl: './routing-guards.html',
  styleUrl: './routing-guards.scss',
})
export class RoutingGuardsPage {
  protected readonly persona = PERSONAS_DEMO[0];
}
