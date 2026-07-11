import { Component, inject, OnInit } from '@angular/core';

import { MenuNodeComponent } from './menu-node.component';
import { MenuStore } from '../../store/menu.store';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuNodeComponent],
  template: `
  <nav class="wd-nav wd-scroll wd-menu" aria-label="منوی سامانه">
    @if (store.loading()) {
      <p class="wd-menu__status">در حال بارگذاری منو...</p>
    } @else if (store.error()) {
      <p class="wd-menu__status wd-menu__status--error">{{ store.error() }}</p>
      <button type="button" class="wd-menu__retry" (click)="store.load()">تلاش مجدد</button>
    } @else if (!store.items().length) {
      <p class="wd-menu__status wd-menu__status--error">منویی برای نمایش وجود ندارد</p>
      <button type="button" class="wd-menu__retry" (click)="store.load()">بارگذاری مجدد</button>
    } @else {
      @for (item of store.items(); track item.menuId) {
        <app-menu-node [item]="item" [depth]="0" />
      }
    }
  </nav>
  `,
})
export class MenuComponent implements OnInit {
  readonly store = inject(MenuStore);

  ngOnInit(): void {
    if (!this.store.items().length) {
      this.store.load();
    }
  }
}
