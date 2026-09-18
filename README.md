# Angular Entrevista Prep

Práctica de Angular **22** para entrevista. Todos los ejemplos giran alrededor del objeto **`Persona`**.

```ts
interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  activa: boolean;
  rol: 'admin' | 'user' | 'guest';
}
```

Modelo compartido: `src/app/shared/models/persona.ts`

## Cómo correrlo

```bash
npm start
# o: ng serve
```

Abrí `http://localhost:4200/` — el home lista los temas y cada uno tiene su ruta.

## Índice de temas

| # | Carpeta | Tema | Qué practicar con `Persona` |
|---|---------|------|-----------------------------|
| 01 | [`src/app/temas/01-control-flow`](src/app/temas/01-control-flow) | Control flow | `@if` / `@for` / `@switch` / `@empty` sobre listas de personas |
| 02 | [`src/app/temas/02-defer`](src/app/temas/02-defer) | `@defer` | Cargar detalle de persona de forma diferida |
| 03 | [`src/app/temas/03-standalone`](src/app/temas/03-standalone) | Standalone | Componentes sin NgModule; imports explícitos |
| 04 | [`src/app/temas/04-input-output-model`](src/app/temas/04-input-output-model) | `input` / `output` / `model` | Pasar y editar una `Persona` entre padre e hijo |
| 05 | [`src/app/temas/05-signals`](src/app/temas/05-signals) | Signals | Estado reactivo de personas con `signal()` |
| 06 | [`src/app/temas/06-computed-effect`](src/app/temas/06-computed-effect) | `computed` / `effect` | Filtrar activas, reaccionar a cambios |
| 07 | [`src/app/temas/07-forms`](src/app/temas/07-forms) | Forms | Alta/edición de `Persona` (Reactive Forms) |
| 08 | [`src/app/temas/08-http-rxjs`](src/app/temas/08-http-rxjs) | HttpClient + RxJS | Obtener personas, `map` / `filter` / `switchMap` |
| 09 | [`src/app/temas/09-routing-guards`](src/app/temas/09-routing-guards) | Routing / guards | Rutas, lazy load y guard por rol de persona |
| 10 | [`src/app/temas/10-dependency-injection`](src/app/temas/10-dependency-injection) | DI / providers | `PersonaService` inyectable |
| 11 | [`src/app/temas/11-pipes-directives`](src/app/temas/11-pipes-directives) | Pipes & directives | Formatear nombre; resaltar personas activas |
| 12 | [`src/app/temas/12-change-detection`](src/app/temas/12-change-detection) | Change detection | OnPush + signals con lista de personas |
| 13 | [`src/app/temas/13-signal-forms`](src/app/temas/13-signal-forms) | Signal Forms | Alta de `Persona` con `form()` + `[formField]` |
| 14 | [`src/app/temas/14-seguridad`](src/app/temas/14-seguridad) | Seguridad / transversales | JWT, CORS, XSS, CSRF, cookies vs dónde guardar el token |

## Rutas en la app

| Ruta | Tema |
|------|------|
| `/` | Índice |
| `/control-flow` | 01 |
| `/defer` | 02 |
| `/standalone` | 03 |
| `/input-output-model` | 04 |
| `/signals` | 05 |
| `/computed-effect` | 06 |
| `/forms` | 07 |
| `/http-rxjs` | 08 |
| `/routing-guards` | 09 |
| `/dependency-injection` | 10 |
| `/pipes-directives` | 11 |
| `/change-detection` | 12 |
| `/signal-forms` | 13 |
| `/seguridad` | 14 |

## Repo

https://github.com/spaisarieldev/angular-entrevista-prep
