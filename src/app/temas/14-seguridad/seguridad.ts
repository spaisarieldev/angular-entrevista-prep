import { Component, signal } from '@angular/core';

export type TokenStorage = 'memory' | 'sessionStorage' | 'localStorage' | 'cookie-httpOnly';

@Component({
  selector: 'app-seguridad-page',
  templateUrl: './seguridad.html',
  styleUrl: './seguridad.scss',
})
export class SeguridadPage {
  /**
   * Demo didáctica: dónde "guardarías" el JWT de una Persona autenticada.
   * En apps reales preferí memory + refresh en cookie HttpOnly, o BFF.
   */
  protected readonly storage = signal<TokenStorage>('memory');
  protected readonly tokenDemo = signal<string | null>(null);

  protected elegirStorage(value: TokenStorage): void {
    this.storage.set(value);
    this.tokenDemo.set(null);
  }

  protected simularLogin(): void {
    // Token falso solo para explicar el flujo (no es un JWT real firmado).
    const fake =
      'header.payload.signature (demo Persona id=1 rol=admin)';
    this.tokenDemo.set(fake);

    // Limpio storages del browser en la demo para no dejar basura.
    sessionStorage.removeItem('demo_jwt');
    localStorage.removeItem('demo_jwt');

    if (this.storage() === 'sessionStorage') {
      sessionStorage.setItem('demo_jwt', fake);
    }
    if (this.storage() === 'localStorage') {
      localStorage.setItem('demo_jwt', fake);
    }
    // cookie-httpOnly NO se puede setear desde JS (a propósito): lo setea el backend.
  }

  protected leerDesdeBrowser(): string {
    if (this.storage() === 'sessionStorage') {
      return sessionStorage.getItem('demo_jwt') ?? '(vacío)';
    }
    if (this.storage() === 'localStorage') {
      return localStorage.getItem('demo_jwt') ?? '(vacío)';
    }
    if (this.storage() === 'cookie-httpOnly') {
      return 'No legible desde JS (HttpOnly) — así se mitiga XSS robando el token';
    }
    return this.tokenDemo() ?? '(solo en memoria del servicio Angular)';
  }
}
