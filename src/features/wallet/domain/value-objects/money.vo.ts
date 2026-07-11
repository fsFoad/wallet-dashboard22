export class Money {
  constructor(readonly amount: number, readonly currency: string) {}

  static from(amount: number, currency = 'USD'): Money {
    return new Money(amount, currency);
  }

  isPositive(): boolean {
    return this.amount >= 0;
  }
}
