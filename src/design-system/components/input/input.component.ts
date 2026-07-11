import { Component, input } from '@angular/core';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [InputText],
  template: `<input pInputText [placeholder]="placeholder()" />`,
})
export class DsInputComponent {
  readonly placeholder = input<string>('');
}
