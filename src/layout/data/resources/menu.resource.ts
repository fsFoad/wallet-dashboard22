import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiClient } from '@core/api/api-client';
import { AppSettings } from '@core/config/app.settings';

import menuMockData from '../../../assets/mocks/menu.json';
import { MENU_API } from '../api/menu.api';
import { MenuApiResponse } from '../dto/menu.dto';

/**
 * منبع داده منو.
 * فقط به AppSettings.useMock('menu') وابسته است — نه apiIsMock.
 */
@Injectable({ providedIn: 'root' })
export class MenuResource {
  private readonly api = inject(ApiClient);

  getAllMenuByUser(): Observable<MenuApiResponse> {
    if (AppSettings.useMock('menu')) {
      return of(menuMockData as MenuApiResponse);
    }

    return this.api.get<MenuApiResponse>(MENU_API.getAllByUser);
  }
}
