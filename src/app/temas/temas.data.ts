export interface TemaItem {
  id: string;
  titulo: string;
  ruta: string;
  carpeta: string;
  resumen: string;
}

/** Índice de temas — misma fuente conceptual que el README raíz. */
export const TEMAS: TemaItem[] = [
  {
    id: '01',
    titulo: 'Control flow',
    ruta: '/control-flow',
    carpeta: '01-control-flow',
    resumen: '@if / @for / @switch / @empty con listas de Persona',
  },
  {
    id: '02',
    titulo: '@defer',
    ruta: '/defer',
    carpeta: '02-defer',
    resumen: 'Carga diferida del detalle de una Persona',
  },
  {
    id: '03',
    titulo: 'Standalone',
    ruta: '/standalone',
    carpeta: '03-standalone',
    resumen: 'Componentes standalone e imports explícitos',
  },
  {
    id: '04',
    titulo: 'input / output / model',
    ruta: '/input-output-model',
    carpeta: '04-input-output-model',
    resumen: 'Comunicación padre-hijo editando una Persona',
  },
  {
    id: '05',
    titulo: 'Signals',
    ruta: '/signals',
    carpeta: '05-signals',
    resumen: 'Estado reactivo de personas con signal()',
  },
  {
    id: '06',
    titulo: 'computed / effect',
    ruta: '/computed-effect',
    carpeta: '06-computed-effect',
    resumen: 'Derivados y efectos sobre Persona',
  },
  {
    id: '07',
    titulo: 'Forms',
    ruta: '/forms',
    carpeta: '07-forms',
    resumen: 'Alta/edición de Persona con Reactive Forms',
  },
  {
    id: '08',
    titulo: 'HttpClient + RxJS',
    ruta: '/http-rxjs',
    carpeta: '08-http-rxjs',
    resumen: 'Traer y transformar personas con operadores',
  },
  {
    id: '09',
    titulo: 'Routing / guards',
    ruta: '/routing-guards',
    carpeta: '09-routing-guards',
    resumen: 'Rutas, lazy load y guard por rol',
  },
  {
    id: '10',
    titulo: 'Dependency Injection',
    ruta: '/dependency-injection',
    carpeta: '10-dependency-injection',
    resumen: 'PersonaService inyectable',
  },
  {
    id: '11',
    titulo: 'Pipes & directives',
    ruta: '/pipes-directives',
    carpeta: '11-pipes-directives',
    resumen: 'Formatear y resaltar personas',
  },
  {
    id: '12',
    titulo: 'Change detection',
    ruta: '/change-detection',
    carpeta: '12-change-detection',
    resumen: 'OnPush + signals con lista de Persona',
  },
  {
    id: '13',
    titulo: 'Signal Forms',
    ruta: '/signal-forms',
    carpeta: '13-signal-forms',
    resumen: 'Alta de Persona con form() + [formField]',
  },
  {
    id: '14',
    titulo: 'Seguridad / transversales',
    ruta: '/seguridad',
    carpeta: '14-seguridad',
    resumen: 'JWT, CORS, XSS, CSRF, cookies vs token',
  },
];
