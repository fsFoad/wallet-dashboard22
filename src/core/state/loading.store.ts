import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingStore {
  readonly active = signal(0);

  start(): void {
    this.active.update((count) => count + 1);
  }

  stop(): void {
    this.active.update((count) => Math.max(0, count - 1));
  }
}
