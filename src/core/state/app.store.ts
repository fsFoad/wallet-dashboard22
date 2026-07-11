import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppStore {
  readonly initialized = signal(false);
}
