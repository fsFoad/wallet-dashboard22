import { environment } from '@env/environment';

/**
 * منابع داده قابل mock شدن.
 * برای فیچر جدید: کلید را اینجا + در environment اضافه کن.
 */
export type MockSource = 'api' | 'menu';

/**
 * تنظیمات سراسری اپ.
 *
 * دو flag مستقل:
 * - apiIsMock  → APIهای عمومی (wallet, payment, reports, ...)
 * - menuMock   → فقط منو
 *
 * | apiIsMock | menuMock | نتیجه                           |
 * |-----------|----------|---------------------------------|
 * | false     | true     | منو mock، بقیه از سرویس         |
 * | true      | false    | منو از API، بقیه mock           |
 * | true      | true     | همه mock                        |
 * | false     | false    | همه از سرویس واقعی              |
 *
 * در Resourceها همیشه از useMock() استفاده کن:
 *   if (AppSettings.useMock('menu')) { ... }
 *   if (AppSettings.useMock('api')) { ... }
 */
export class AppSettings {
  static readonly defaultLanguage = 'fa';
  static readonly defaultDirection: 'rtl' | 'ltr' = 'rtl';
  static readonly navigationPosition: 'left' | 'right' = 'right';
  static readonly showSettingsPanel = !environment.production;

  /** پیش‌فرض mock برای APIهای عمومی (غیر از منو) */
  static readonly apiIsMock = environment.apiIsMock;

  /** mock اختصاصی منو — مستقل از apiIsMock */
  static readonly menuMock = environment.menuMock;

  /**
   * آیا این منبع باید از mock خوانده شود؟
   * تنها نقطه تصمیم‌گیری در Resourceها.
   */
  static useMock(source: MockSource): boolean {
    switch (source) {
      case 'menu':
        return AppSettings.menuMock;
      case 'api':
        return AppSettings.apiIsMock;
    }
  }
}
