/** Supported application languages. Extend per project. */
export type AppLanguage = 'en' | 'fa' | 'ar';

export type TextDirection = 'ltr' | 'rtl';

export interface LocalizedText {
  en: string;
  fa: string;
  ar?: string;
}
