import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { AppLanguage } from '@core/i18n/language.model';
import { getTextDirection, isRtlLanguage } from '@core/i18n/rtl-languages.constant';

import {
  BALANCE_CHART_POINTS,
  CATEGORY_SEGMENT_DEFS,
  CURRENCIES,
  MONTHLY_STAT_DEFS,
  SPENDING_SEGMENT_DEFS,
} from '../data/resources/wallet.mock';
import { WalletRepository } from '../data/repositories/wallet.repository';
import { WALLET_I18N } from '../i18n/wallet-dashboard.i18n';
import {
  buildDonutArcs,
  resolveLocalizedText,
} from '../utils/wallet-dashboard.utils';

function createDashboardMock() {
  return {
    balance: 48250.75,
    growth_percent: 12.4,
    currencies: CURRENCIES,
    balance_chart_points: BALANCE_CHART_POINTS,
    transactions: [] as Array<{
      id: string;
      merchant_en: string;
      merchant_fa: string;
      category_key: string;
      date_en: string;
      date_fa: string;
      amount: number;
      status: 'completed' | 'pending' | 'failed';
      initials: string;
      color: string;
    }>,
  };
}

@Injectable({ providedIn: 'root' })
export class WalletStore {
  private readonly repository = inject(WalletRepository);

  readonly lang = signal<AppLanguage>('fa');
  readonly balanceVisible = signal(true);
  readonly selectedCurrency = signal('USD');

  readonly dashboard = toSignal(this.repository.getDashboard(), {
    initialValue: createDashboardMock(),
  });

  readonly isRtl = computed(() => isRtlLanguage(this.lang()));
  readonly dir = computed(() => getTextDirection(this.lang()));
  readonly t = computed(() => WALLET_I18N[this.lang()]);

  readonly currencies = CURRENCIES;
  readonly balance = computed(() => this.dashboard()?.balance ?? 0);
  readonly growthPercent = computed(() => this.dashboard()?.growth_percent ?? 0);

  readonly monthlyStats = computed(() =>
    MONTHLY_STAT_DEFS.map((stat) => ({
      label: this.t().monthlyStats[stat.key],
      value: this.lang() === 'fa' ? stat.valueFa : stat.valueEn,
      trend: stat.trend,
      trendUp: stat.trendUp,
    })),
  );

  readonly transactions = computed(() => {
    const texts = this.t();
    const lang = this.lang();
    return (this.dashboard()?.transactions ?? []).map((tx) => ({
      id: tx.id,
      merchant: resolveLocalizedText(
        { en: tx.merchant_en, fa: tx.merchant_fa },
        lang,
      ),
      category: texts.txCategories[tx.category_key],
      date: resolveLocalizedText({ en: tx.date_en, fa: tx.date_fa }, lang),
      amount: tx.amount,
      status: tx.status,
      initials: tx.initials,
      color: tx.color,
    }));
  });

  readonly spendingSegments = computed(() =>
    SPENDING_SEGMENT_DEFS.map((seg) => ({
      label: this.t().spending[seg.key],
      value: seg.value,
      color: seg.color,
    })),
  );

  readonly categorySegments = computed(() =>
    CATEGORY_SEGMENT_DEFS.map((seg) => ({
      label: this.t().categories[seg.key],
      value: seg.value,
      color: seg.color,
    })),
  );

  readonly spendingArcs = computed(() => buildDonutArcs(this.spendingSegments()));
  readonly categoryArcs = computed(() => buildDonutArcs(this.categorySegments()));

  readonly categoryTotal = computed(() =>
    this.categorySegments().reduce((sum, segment) => sum + segment.value, 0),
  );

  readonly balanceChartPoints = computed(
    () => this.dashboard()?.balance_chart_points ?? BALANCE_CHART_POINTS,
  );

  toggleBalance(): void {
    this.balanceVisible.update((visible) => !visible);
  }

  toggleLang(): void {
    this.lang.update((current) => (current === 'en' ? 'fa' : 'en'));
  }
}

