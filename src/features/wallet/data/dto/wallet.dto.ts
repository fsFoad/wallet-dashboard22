import { TransactionStatus } from '../../domain/enums/transaction-status.enum';

export interface TransactionDto {
  id: string;
  merchant_en: string;
  merchant_fa: string;
  category_key: string;
  date_en: string;
  date_fa: string;
  amount: number;
  status: TransactionStatus;
  initials: string;
  color: string;
}

export interface WalletDashboardDto {
  balance: number;
  growth_percent: number;
  currencies: string[];
  balance_chart_points: number[];
  transactions: TransactionDto[];
}
