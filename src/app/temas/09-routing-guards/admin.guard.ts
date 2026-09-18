import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PERSONAS_DEMO } from '../../shared/models/persona';

/** Demo: solo deja pasar si la primera persona demo es admin. */
export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const esAdmin = PERSONAS_DEMO[0].rol === 'admin';
  return esAdmin ? true : router.createUrlTree(['/routing-guards']);
};
