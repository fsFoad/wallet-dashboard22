import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="app-sidebar" [class.app-sidebar--right]="position() === 'right'">
      <ng-content />
    </aside>
  `,
  styles: `
    .app-sidebar {
      width: 16rem;
      min-height: 100%;
      border-inline-end: 1px solid var(--p-content-border-color, #e2e8f0);
      background: var(--p-content-background, #fff);
    }

    .app-sidebar--right {
      order: 2;
      border-inline-end: 0;
      border-inline-start: 1px solid var(--p-content-border-color, #e2e8f0);
    }
  `,
})
export class SidebarComponent {
  readonly position = input<'left' | 'right'>('left');
}
