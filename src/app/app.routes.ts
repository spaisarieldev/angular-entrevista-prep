import { Routes } from '@angular/router';
import { adminGuard } from './temas/09-routing-guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.HomePage),
  },
  {
    path: 'control-flow',
    loadComponent: () =>
      import('./temas/01-control-flow/control-flow').then((m) => m.ControlFlowPage),
  },
  {
    path: 'defer',
    loadComponent: () => import('./temas/02-defer/defer').then((m) => m.DeferPage),
  },
  {
    path: 'standalone',
    loadComponent: () =>
      import('./temas/03-standalone/standalone').then((m) => m.StandalonePage),
  },
  {
    path: 'input-output-model',
    loadComponent: () =>
      import('./temas/04-input-output-model/input-output-model').then(
        (m) => m.InputOutputModelPage,
      ),
  },
  {
    path: 'signals',
    loadComponent: () => import('./temas/05-signals/signals').then((m) => m.SignalsPage),
  },
  {
    path: 'computed-effect',
    loadComponent: () =>
      import('./temas/06-computed-effect/computed-effect').then(
        (m) => m.ComputedEffectPage,
      ),
  },
  {
    path: 'forms',
    loadComponent: () => import('./temas/07-forms/forms').then((m) => m.FormsPage),
  },
  {
    path: 'http-rxjs',
    loadComponent: () =>
      import('./temas/08-http-rxjs/http-rxjs').then((m) => m.HttpRxjsPage),
  },
  {
    path: 'routing-guards',
    loadComponent: () =>
      import('./temas/09-routing-guards/routing-guards').then((m) => m.RoutingGuardsPage),
  },
  {
    path: 'routing-guards/admin',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./temas/09-routing-guards/admin-zona').then((m) => m.AdminZonaPage),
  },
  {
    path: 'dependency-injection',
    loadComponent: () =>
      import('./temas/10-dependency-injection/dependency-injection').then(
        (m) => m.DependencyInjectionPage,
      ),
  },
  {
    path: 'pipes-directives',
    loadComponent: () =>
      import('./temas/11-pipes-directives/pipes-directives').then(
        (m) => m.PipesDirectivesPage,
      ),
  },
  {
    path: 'change-detection',
    loadComponent: () =>
      import('./temas/12-change-detection/change-detection').then(
        (m) => m.ChangeDetectionPage,
      ),
  },
  {
    path: 'signal-forms',
    loadComponent: () =>
      import('./temas/13-signal-forms/signal-forms').then((m) => m.SignalFormsPage),
  },
  {
    path: 'seguridad',
    loadComponent: () =>
      import('./temas/14-seguridad/seguridad').then((m) => m.SeguridadPage),
  },
  { path: '**', redirectTo: '' },
];
