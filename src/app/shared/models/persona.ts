export interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  activa: boolean;
  rol: 'admin' | 'user' | 'guest';
}

export const PERSONAS_DEMO: Persona[] = [
  {
    id: 1,
    nombre: 'Ana',
    apellido: 'García',
    edad: 28,
    email: 'ana.garcia@example.com',
    activa: true,
    rol: 'admin',
  },
  {
    id: 2,
    nombre: 'Bruno',
    apellido: 'López',
    edad: 34,
    email: 'bruno.lopez@example.com',
    activa: true,
    rol: 'user',
  },
  {
    id: 3,
    nombre: 'Carla',
    apellido: 'Ruiz',
    edad: 22,
    email: 'carla.ruiz@example.com',
    activa: false,
    rol: 'guest',
  },
  {
    id: 4,
    nombre: 'Diego',
    apellido: 'Martínez',
    edad: 41,
    email: 'diego.martinez@example.com',
    activa: true,
    rol: 'user',
  },
];
