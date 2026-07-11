import { Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

export default [
  {
    path: '',
    component: ShellComponent,
    data: { layout: 'blank' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'wallet' },
      {
        path: 'wallet',
        loadChildren: () => import('@features/wallet/wallet.routes'),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@features/dashboard/dashboard.routes'),
      },
    ],
  },
] as Routes;
