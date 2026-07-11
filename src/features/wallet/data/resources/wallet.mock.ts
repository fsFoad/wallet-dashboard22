import {
  DonutSegmentDef,
  MonthlyStatDef,
  TransactionDef,
} from '../../domain/models/wallet-dashboard.model';

export const BALANCE_CHART_POINTS = [42, 48, 45, 52, 49, 58, 55, 62, 59, 68, 64, 72];

export const MONTHLY_STAT_DEFS: MonthlyStatDef[] = [
  { key: 'income', valueEn: '$24,850', valueFa: '۲۴,۸۵۰$', trend: '+8.2%', trendUp: true },
  { key: 'expenses', valueEn: '$12,430', valueFa: '۱۲,۴۳۰$', trend: '-3.1%', trendUp: false },
  { key: 'transactions', valueEn: '148', valueFa: '۱۴۸', trend: '+12', trendUp: true },
  { key: 'avgDaily', valueEn: '$415', valueFa: '۴۱۵$', trend: '-2.4%', trendUp: false },
];

export const TRANSACTION_DEFS: TransactionDef[] = [
  {
    id: '1',
    merchant: { en: 'Apple Store', fa: 'اپل استور' },
    categoryKey: 'shopping',
    date: { en: 'Jul 6, 2026', fa: '۱۶ تیر ۱۴۰۵' },
    amount: -249.99,
    status: 'completed',
    initials: 'AS',
    color: '#18212F',
  },
  {
    id: '2',
    merchant: { en: 'Stripe Payout', fa: 'واریز Stripe' },
    categoryKey: 'income',
    date: { en: 'Jul 5, 2026', fa: '۱۵ تیر ۱۴۰۵' },
    amount: 3200.0,
    status: 'completed',
    initials: 'SP',
    color: '#138C89',
  },
  {
    id: '3',
    merchant: { en: 'Uber', fa: 'اوبر' },
    categoryKey: 'transport',
    date: { en: 'Jul 5, 2026', fa: '۱۵ تیر ۱۴۰۵' },
    amount: -18.4,
    status: 'completed',
    initials: 'UB',
    color: '#18212F',
  },
  {
    id: '4',
    merchant: { en: 'Netflix', fa: 'نتفلیکس' },
    categoryKey: 'entertainment',
    date: { en: 'Jul 4, 2026', fa: '۱۴ تیر ۱۴۰۵' },
    amount: -15.99,
    status: 'completed',
    initials: 'NF',
    color: '#E50914',
  },
  {
    id: '5',
    merchant: { en: 'Whole Foods', fa: 'وول فودز' },
    categoryKey: 'groceries',
    date: { en: 'Jul 4, 2026', fa: '۱۴ تیر ۱۴۰۵' },
    amount: -86.2,
    status: 'pending',
    initials: 'WF',
    color: '#22C55E',
  },
  {
    id: '6',
    merchant: { en: 'AWS Cloud', fa: 'AWS Cloud' },
    categoryKey: 'services',
    date: { en: 'Jul 3, 2026', fa: '۱۳ تیر ۱۴۰۵' },
    amount: -412.5,
    status: 'completed',
    initials: 'AW',
    color: '#FF9900',
  },
];

export const SPENDING_SEGMENT_DEFS: DonutSegmentDef[] = [
  { key: 'shopping', value: 32, color: '#138C89' },
  { key: 'food', value: 24, color: '#0EAFB2' },
  { key: 'transport', value: 18, color: '#5BBFBF' },
  { key: 'bills', value: 16, color: '#94D4D4' },
  { key: 'other', value: 10, color: '#C5E8E8' },
];

export const CATEGORY_SEGMENT_DEFS: DonutSegmentDef[] = [
  { key: 'essentials', value: 38, color: '#138C89' },
  { key: 'lifestyle', value: 27, color: '#0EAFB2' },
  { key: 'savings', value: 20, color: '#22C55E' },
  { key: 'investments', value: 15, color: '#F59E0B' },
];

export const CURRENCIES = ['USD', 'EUR', 'GBP'];
