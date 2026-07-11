import { Component, input } from '@angular/core';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'ds-dialog',
  standalone: true,
  imports: [Dialog],
  template: `
    <p-dialog [header]="header()" [visible]="visible()" [modal]="true">
      <ng-content />
    </p-dialog>
  `,
})
export class DsDialogComponent {
  readonly header = input<string>('');
  readonly visible = input<boolean>(false);
}
