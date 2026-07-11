import { inject, Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Type } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DsDialogService {
  private readonly dialog = inject(DialogService);

  open<T>(component: Type<T>, config?: { header?: string; width?: string }): DynamicDialogRef | null {
    return this.dialog.open(component, {
      header: config?.header,
      width: config?.width ?? '32rem',
      modal: true,
    });
  }
}
