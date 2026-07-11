import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiClient } from '@core/api/api-client';
import { AppSettings } from '@core/config/app.settings';

import { WALLET_API } from '../api/wallet.api';
import { WalletDashboardDto } from '../dto/wallet.dto';
import {
  BALANCE_CHART_POINTS,
  CURRENCIES,
  TRANSACTION_DEFS,
} from './wallet.mock';

/**
 * منبع داده wallet.
 * فقط به AppSettings.useMock('api') وابسته است — نه menuMock.
 */
@Injectable({ providedIn: 'root' })
export class WalletResource {
  private readonly api = inject(ApiClient);

  getDashboard(): Observable<WalletDashboardDto> {
    if (AppSettings.useMock('api')) {
      return of(this.buildMockDashboard());
    }

    return this.api.get<WalletDashboardDto>(WALLET_API.dashboard);
  }

  private buildMockDashboard(): WalletDashboardDto {
    return {
      balance: 48250.75,
      growth_percent: 12.4,
      currencies: CURRENCIES,
      balance_chart_points: BALANCE_CHART_POINTS,
      transactions: TRANSACTION_DEFS.map((tx) => ({
        id: tx.id,
        merchant_en: tx.merchant.en,
        merchant_fa: tx.merchant.fa,
        category_key: tx.categoryKey,
        date_en: tx.date.en,
        date_fa: tx.date.fa,
        amount: tx.amount,
        status: tx.status,
        initials: tx.initials,
        color: tx.color,
      })),
    };
  }
}
