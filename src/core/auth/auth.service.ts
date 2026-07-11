import { inject, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly authenticated = signal(false);

  readonly isAuthenticated = this.authenticated.asReadonly();

  signIn(): void {
    this.authenticated.set(true);
  }

  signOut(): void {
    this.authenticated.set(false);
  }
}
