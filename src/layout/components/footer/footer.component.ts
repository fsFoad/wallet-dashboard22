import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <ng-content />
    </footer>
  `,
  styles: `
    .app-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--p-content-border-color, #e2e8f0);
      color: var(--p-text-muted-color, #64748b);
      font-size: 0.875rem;
    }
  `,
})
export class FooterComponent {}
