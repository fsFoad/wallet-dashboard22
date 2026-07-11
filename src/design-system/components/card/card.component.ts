import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [Card],
  template: `<p-card [header]="header()"><ng-content /></p-card>`,
})
export class DsCardComponent {
  readonly header = input<string>();
}
