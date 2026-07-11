import { AppLanguage, LocalizedText } from '@core/i18n/language.model';

const LOCALE_MAP: Record<AppLanguage, string> = {
  en: 'en-US',
  fa: 'fa-IR',
  ar: 'ar-SA',
};

export function resolveLocalizedText(text: LocalizedText, lang: AppLanguage): string {
  if (lang === 'ar') return text.ar ?? text.fa;
  return text[lang] ?? text.en;
}

export function getLocaleForLanguage(lang: AppLanguage): string {
  return LOCALE_MAP[lang];
}

export function formatCurrencyAmount(amount: number, lang: AppLanguage): string {
  const prefix = amount >= 0 ? '+' : '-';
  const formatted = Math.abs(amount).toLocaleString(getLocaleForLanguage(lang), {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${prefix}$${formatted}`;
}

export function buildLineChartPath(points: number[], width = 280, height = 64): string {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / range) * (height - 8) - 4;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function buildLineChartArea(points: number[], width = 280, height = 64): string {
  const line = buildLineChartPath(points, width, height);
  return `${line} L${width},${height} L0,${height} Z`;
}

export function buildDonutArcs(
  segments: { label: string; value: number; color: string }[],
  radius = 54,
): Array<{ label: string; value: number; color: string; dashArray: string; dashOffset: number }> {
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return segments.map((segment) => {
    const length = (segment.value / 100) * circumference;
    const arc = {
      ...segment,
      dashArray: `${length} ${circumference - length}`,
      dashOffset: -offset,
    };
    offset += length;
    return arc;
  });
}
