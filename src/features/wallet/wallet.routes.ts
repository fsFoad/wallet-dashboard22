import { Routes } from '@angular/router';

export default [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/wallet-dashboard/wallet-dashboard.component').then(
        (m) => m.WalletDashboardComponent,
      ),
  },
] as Routes;
