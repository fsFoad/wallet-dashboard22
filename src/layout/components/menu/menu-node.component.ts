import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MenuItem } from '../../domain/models/menu-item.model';
import { MenuStore } from '../../store/menu.store';
import { resolveMenuIcon } from '../../utils/menu-icon.util';

@Component({
  selector: 'app-menu-node',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuNodeComponent],
  template: `
    @switch (item().type) {
      @case ('group') {
        <div class="wd-menu__group">
          <p class="wd-menu__group-title">{{ item().title }}</p>
          @for (child of item().children; track child.menuId) {
            <app-menu-node [item]="child" [depth]="depth() + 1" />
          }
        </div>
      }
      @case ('collapsable') {
        <div class="wd-menu__branch" [style.--wd-menu-depth]="depth()">
          <button
            type="button"
            class="wd-nav__item wd-nav__item--collapsable"
            [class.wd-nav__item--expanded]="store.isExpanded(item().id)"
            (click)="store.toggleExpand(item().id)"
          >
            <span class="wd-nav__icon">
              <i [class]="resolveMenuIcon(item().icon)"></i>
            </span>
            <span class="wd-menu__label">{{ item().title }}</span>
            <i class="pi pi-chevron-left wd-menu__chevron" aria-hidden="true"></i>
          </button>
          @if (store.isExpanded(item().id)) {
            <div class="wd-menu__children">
              @for (child of item().children; track child.menuId) {
                <app-menu-node [item]="child" [depth]="depth() + 1" />
              }
            </div>
          }
        </div>
      }
      @default {
        <a
          class="wd-nav__item"
          [class.wd-nav__item--active]="store.isActive(item())"
          [routerLink]="item().url"
          routerLinkActive="wd-nav__item--active"
          [routerLinkActiveOptions]="{ exact: false }"
        >
          <span class="wd-nav__icon">
            <i [class]="resolveMenuIcon(item().icon)"></i>
          </span>
          <span>{{ item().title }}</span>
        </a>
      }
    }
  `,
})
export class MenuNodeComponent implements OnInit {
  readonly item = input.required<MenuItem>();
  readonly depth = input(0);

  readonly store = inject(MenuStore);
  readonly resolveMenuIcon = resolveMenuIcon;

  ngOnInit(): void {
    if (this.item().type === 'collapsable' && this.item().children.some((c) => this.hasActiveChild(c))) {
      this.store.expand(this.item().id);
    }
  }

  private hasActiveChild(item: MenuItem): boolean {
    if (item.url && this.store.isActive(item)) {
      return true;
    }
    return item.children.some((child) => this.hasActiveChild(child));
  }
}
