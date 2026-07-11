import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-page-header',
  standalone: true,
  template: `
    <header class="ds-page-header">
      <div>
        <p class="ds-page-header__eyebrow">{{ eyebrow() }}</p>
        <h1>{{ title() }}</h1>
      </div>
      <ng-content select="[actions]" />
    </header>
  `,
  styles: `
    .ds-page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .ds-page-header__eyebrow {
      margin: 0 0 0.25rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--p-text-muted-color, #64748b);
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  `,
})
export class DsPageHeaderComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input<string>();
}
