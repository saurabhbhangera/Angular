import { Route } from '@angular/router';

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  }
];