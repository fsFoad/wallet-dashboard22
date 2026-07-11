import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { MenuItem } from '../domain/models/menu-item.model';
import { MenuRepository } from '../data/repositories/menu.repository';

@Injectable({ providedIn: 'root' })
export class MenuStore {
  private readonly repository = inject(MenuRepository);
  private readonly router = inject(Router);

  readonly items = signal<MenuItem[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly expandedIds = signal<Set<string>>(new Set());

  load(): void {
    if (this.loading()) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.repository
      .getAllMenuByUser()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (items) => {
          this.items.set(items);
          this.expandParentsForUrl(this.router.url, items);
        },
        error: () => this.error.set('خطا در بارگذاری منو'),
      });
  }

  expand(id: string): void {
    this.expandedIds.update((current) => {
      const next = new Set(current);
      next.add(id);
      return next;
    });
  }

  toggleExpand(id: string): void {
    this.expandedIds.update((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  isExpanded(id: string): boolean {
    return this.expandedIds().has(id);
  }

  navigate(item: MenuItem): void {
    if (!item.url || item.type !== 'item') {
      return;
    }

    void this.router.navigateByUrl(item.url);
  }

  isActive(item: MenuItem): boolean {
    if (!item.url) {
      return false;
    }

    const current = this.router.url;
    return current === item.url || current.startsWith(`${item.url}/`);
  }

  private expandParentsForUrl(url: string, items: MenuItem[]): void {
    const expanded = new Set<string>();

    const walk = (nodes: MenuItem[], parents: string[]): boolean => {
      for (const node of nodes) {
        const chain = [...parents, node.id];
        if (node.url && (url === node.url || url.startsWith(`${node.url}/`))) {
          chain.slice(0, -1).forEach((id) => expanded.add(id));
          return true;
        }
        if (node.children.length && walk(node.children, chain)) {
          return true;
        }
      }
      return false;
    };

    walk(items, []);
    this.expandedIds.set(expanded);
  }
}
