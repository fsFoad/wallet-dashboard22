import { APP_INITIALIZER, Provider } from '@angular/core';

import { AppSettings } from '@core/config/app.settings';
import { MenuStore } from '@layout/store/menu.store';

export function initializeApp(menuStore: MenuStore): () => void {
  return () => {
    document.documentElement.lang = AppSettings.defaultLanguage;
    document.documentElement.dir = AppSettings.defaultDirection;
    menuStore.load();
  };
}

export const APP_INITIALIZER_PROVIDER: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeApp,
  deps: [MenuStore],
  multi: true,
};
