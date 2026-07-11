import { CurrencyPipe, DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { getTextDirection } from '@core/i18n/rtl-languages.constant';
import { MenuComponent } from '@layout/components/menu/menu.component';

import { WalletStore } from '../../store/wallet.store';
import {
  buildLineChartArea,
  buildLineChartPath,
  formatCurrencyAmount,
} from '../../utils/wallet-dashboard.utils';

@Component({
  selector: 'app-wallet-dashboard',
  imports: [CurrencyPipe, FormsModule, MenuComponent],
  templateUrl: './wallet-dashboard.component.html',
  host: {
    '[class.wd-rtl]': 'store.isRtl()',
    '[class.wd-ltr]': '!store.isRtl()',
    '[attr.dir]': 'store.dir()',
    '[attr.lang]': 'store.lang()',
  },
})
export class WalletDashboardComponent {
  readonly store = inject(WalletStore);
  private readonly document = inject(DOCUMENT);

  readonly balanceChartPath = computed(() =>
    buildLineChartPath(this.store.balanceChartPoints()),
  );
  readonly balanceChartArea = computed(() =>
    buildLineChartArea(this.store.balanceChartPoints()),
  );

  readonly profileInitials = computed(() => {
    const lang = this.store.lang();
    if (lang === 'fa') return 'عم';
    if (lang === 'ar') return 'أم';
    return 'JD';
  });

  constructor() {
    effect(() => {
      const lang = this.store.lang();
      this.document.documentElement.lang = lang;
      this.document.documentElement.dir = getTextDirection(lang);
    });
  }

  formatAmount(amount: number): string {
    return formatCurrencyAmount(amount, this.store.lang());
  }

  statusLabel(status: string): string {
    const labels = this.store.t();
    const map: Record<string, string> = {
      completed: labels.statusCompleted,
      pending: labels.statusPending,
      failed: labels.statusFailed,
    };
    return map[status] ?? status;
  }
}
