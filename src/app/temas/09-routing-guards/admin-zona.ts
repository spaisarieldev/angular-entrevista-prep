import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-zona',
  template: `
    <section class="tema">
      <h1>Zona admin</h1>
      <p>Pasaste el guard porque la Persona demo tiene rol <code>admin</code>.</p>
    </section>
  `,
  styles: `
    .tema {
      padding: 1rem 0;
    }
  `,
})
export class AdminZonaPage {}
