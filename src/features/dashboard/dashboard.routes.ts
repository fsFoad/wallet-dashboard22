import { Routes } from '@angular/router';

export default [
  { path: '', pathMatch: 'full', redirectTo: 'showcase' },
  {
    path: 'showcase',
    loadComponent: () =>
      import('./pages/showcase/showcase.component').then((m) => m.ShowcaseComponent),
  },
] as Routes;
