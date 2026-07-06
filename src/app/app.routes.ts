import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wallet/dashboard' },
  { path: 'home', redirectTo: 'wallet/dashboard', pathMatch: 'full' },
  { path: '', loadChildren: () => import('@layout/layout.routes') },
  { path: 'showcase', redirectTo: 'dashboard/showcase', pathMatch: 'full' },
  { path: 'test-primeng', redirectTo: 'dashboard/showcase', pathMatch: 'full' },
  { path: '**', redirectTo: 'wallet/dashboard' },
];
