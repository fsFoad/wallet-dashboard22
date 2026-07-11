import { InjectionToken } from '@angular/core';

export const FEATURE_FLAGS = new InjectionToken<Record<string, boolean>>('FEATURE_FLAGS', {
  providedIn: 'root',
  factory: () => ({
    wallet: true,
    dashboard: true,
    payments: false,
    settlements: false,
  }),
});
