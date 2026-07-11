import { TransactionStatus } from '../enums/transaction-status.enum';

export function isValidTransactionStatus(value: string): value is TransactionStatus {
  return value === 'completed' || value === 'pending' || value === 'failed';
}
