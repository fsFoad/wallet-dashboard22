import { Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'ds-table',
  standalone: true,
  imports: [TableModule],
  template: `<p-table [value]="value()"><ng-content /></p-table>`,
})
export class DsTableComponent {
  readonly value = input<unknown[]>([]);
}
