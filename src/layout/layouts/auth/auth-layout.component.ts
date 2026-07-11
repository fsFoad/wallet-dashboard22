import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="auth-layout">
      <router-outlet />
    </div>
  `,
  styles: `
    .auth-layout {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 2rem;
      background: var(--p-surface-50, #f8fafc);
    }
  `,
})
export class AuthLayoutComponent {}
