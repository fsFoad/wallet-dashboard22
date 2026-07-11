import { InjectionToken } from '@angular/core';

import { environment } from '@env/environment';

export interface AppEnvironment {
  production: boolean;
  apiUrl: string;
  apiIsMock: boolean;
  menuMock: boolean;
  primeUiLicense?: string;
}

export const APP_ENV = new InjectionToken<AppEnvironment>('APP_ENV', {
  providedIn: 'root',
  factory: () => ({
    production: environment.production,
    apiUrl: environment.apiUrl,
    apiIsMock: environment.apiIsMock,
    menuMock: environment.menuMock,
    primeUiLicense: environment.primeUiLicense,
  }),
});

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL', {
  providedIn: 'root',
  factory: () => environment.apiUrl,
});
