import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { appProviders } from '@app/app.providers';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), ...appProviders],
};
