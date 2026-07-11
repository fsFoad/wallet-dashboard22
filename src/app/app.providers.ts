import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { APP_INITIALIZER_PROVIDER } from '@app/app.initializer';
import { appRoutes } from '@app/app.routes';
import { authInterceptor } from '@core/api/interceptors/auth.interceptor';
import { errorInterceptor } from '@core/api/interceptors/error.interceptor';
import { loadingInterceptor } from '@core/api/interceptors/loading.interceptor';
import { environment } from '@env/environment';

export const appProviders: (Provider | EnvironmentProviders)[] = [
  provideRouter(appRoutes),
  provideAnimationsAsync(),
  provideHttpClient(withInterceptors([authInterceptor, loadingInterceptor, errorInterceptor])),
  providePrimeNG({
    license: environment.primeUiLicense,
    ripple: true,
    theme: { preset: Aura },
  }),
  APP_INITIALIZER_PROVIDER,
];
