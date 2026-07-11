import { AppLanguage } from './language.model';

/** Languages that use right-to-left layout. */
export const RTL_LANGUAGES: readonly AppLanguage[] = ['fa', 'ar'] as const;

export function isRtlLanguage(lang: AppLanguage): boolean {
  return RTL_LANGUAGES.includes(lang);
}

export function getTextDirection(lang: AppLanguage): 'ltr' | 'rtl' {
  return isRtlLanguage(lang) ? 'rtl' : 'ltr';
}
