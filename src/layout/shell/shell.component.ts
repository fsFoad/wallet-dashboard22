import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlankLayoutComponent } from '../layouts/blank/blank-layout.component';
import { DefaultLayoutComponent } from '../layouts/default/default-layout.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [BlankLayoutComponent, DefaultLayoutComponent],
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  private readonly route = inject(ActivatedRoute);

  get layout(): string {
    return this.route.snapshot.data['layout'] ?? 'blank';
  }
}
