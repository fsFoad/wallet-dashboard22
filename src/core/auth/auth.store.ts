import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  readonly user = signal<{ id: string; name: string } | null>(null);
}
