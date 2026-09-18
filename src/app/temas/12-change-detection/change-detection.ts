import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PERSONAS_DEMO, Persona } from '../../shared/models/persona';

@Component({
  selector: 'app-change-detection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.scss',
})
export class ChangeDetectionPage {
  /**
   * Con OnPush, mutar un array "a mano" no dispara CD de forma confiable.
   * Usar signals (o nuevas referencias) sí notifica el cambio.
   */
  protected readonly personas = signal<Persona[]>([...PERSONAS_DEMO]);

  protected agregarInvitada(): void {
    this.personas.update((lista) => [
      ...lista,
      {
        id: Date.now(),
        nombre: 'Nueva',
        apellido: 'Invitada',
        edad: 20,
        email: 'nueva@example.com',
        activa: true,
        rol: 'guest',
      },
    ]);
  }
}
