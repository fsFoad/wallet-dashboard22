import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="app-header">
      <ng-content />
    </header>
  `,
  styles: `
    .app-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 1.5rem;
      border-bottom: 1px solid var(--p-content-border-color, #e2e8f0);
      background: var(--p-content-background, #fff);
    }
  `,
})
export class HeaderComponent {
  readonly title = input<string>();
}
