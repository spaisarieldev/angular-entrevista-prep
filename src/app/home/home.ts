import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEMAS } from '../temas/temas.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  protected readonly temas = TEMAS;
}
