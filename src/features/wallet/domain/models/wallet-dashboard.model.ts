import { AppLanguage, LocalizedText } from '@core/i18n/language.model';

export interface DonutArc {
  label: string;
  value: number;
  color: string;
  dashArray: string;
  dashOffset: number;
}

export interface TransactionDef {
  id: string;
  merchant: LocalizedText;
  categoryKey: string;
  date: LocalizedText;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  initials: string;
  color: string;
}

export interface DonutSegmentDef {
  key: string;
  value: number;
  color: string;
}

export interface MonthlyStatDef {
  key: string;
  valueEn: string;
  valueFa: string;
  valueAr?: string;
  trend?: string;
  trendUp?: boolean;
}

export interface WalletTexts {
  brandName: string;
  brandTag: string;
  greeting: string;
  welcome: string;
  searchPlaceholder: string;
  notifications: string;
  switchLanguage: string;
  openProfile: string;
  profileMenu: string;
  profileName: string;
  profileEmail: string;
  profileShort: string;
  walletBalance: string;
  hideBalance: string;
  showBalance: string;
  transfer: string;
  deposit: string;
  withdraw: string;
  moreActions: string;
  monthlySummary: string;
  viewReport: string;
  quickActions: string;
  requestMoney: string;
  exchange: string;
  topUp: string;
  recentTransactions: string;
  seeAll: string;
  merchant: string;
  category: string;
  date: string;
  amount: string;
  status: string;
  spendingOverview: string;
  thisMonth: string;
  categoryBreakdown: string;
  allocated: string;
  bannerEyebrow: string;
  bannerTitle: string;
  bannerText: string;
  inviteFriends: string;
  statusCompleted: string;
  statusPending: string;
  statusFailed: string;
  nav: Record<string, string>;
  monthlyStats: Record<string, string>;
  spending: Record<string, string>;
  categories: Record<string, string>;
  txCategories: Record<string, string>;
}

export type WalletLanguage = AppLanguage;
