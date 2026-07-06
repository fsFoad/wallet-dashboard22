import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dynamic-dialog-demo',
  imports: [Button],
  template: `
    <p class="m-0 mb-4">این محتوای دیالوگ داینامیک PrimeNG است.</p>
    <p-button label="بستن" (onClick)="ref.close()" />
  `,
})
export class DynamicDialogDemo {
  constructor(readonly ref: DynamicDialogRef) {}
}
