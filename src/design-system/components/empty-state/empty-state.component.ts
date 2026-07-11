import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-empty-state',
  standalone: true,
  template: `
    <div class="ds-empty-state">
      <h3>{{ title() }}</h3>
      <p>{{ description() }}</p>
      <ng-content />
    </div>
  `,
  styles: `
    .ds-empty-state {
      text-align: center;
      padding: 2rem;
      color: var(--p-text-muted-color, #64748b);
    }
  `,
})
export class DsEmptyStateComponent {
  readonly title = input<string>('No data');
  readonly description = input<string>('');
}
