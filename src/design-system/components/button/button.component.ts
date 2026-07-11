import { Component, input } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [Button],
  template: `<p-button [label]="label()" [icon]="icon()" [severity]="severity()" />`,
})
export class DsButtonComponent {
  readonly label = input<string>();
  readonly icon = input<string>();
  readonly severity = input<'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'help' | 'contrast'>('primary');
}
