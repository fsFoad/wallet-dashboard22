import { Injectable } from '@angular/core';

import { BaseMapper } from '@core/api/mappers/base.mapper';

import { TransactionDto } from '../dto/wallet.dto';
import { TransactionDef } from '../../domain/models/wallet-dashboard.model';

@Injectable({ providedIn: 'root' })
export class WalletMapper extends BaseMapper<TransactionDto, TransactionDef> {
  toEntity(dto: TransactionDto): TransactionDef {
    return {
      id: dto.id,
      merchant: { en: dto.merchant_en, fa: dto.merchant_fa },
      categoryKey: dto.category_key,
      date: { en: dto.date_en, fa: dto.date_fa },
      amount: dto.amount,
      status: dto.status,
      initials: dto.initials,
      color: dto.color,
    };
  }

  toDto(entity: TransactionDef): TransactionDto {
    return {
      id: entity.id,
      merchant_en: entity.merchant.en,
      merchant_fa: entity.merchant.fa,
      category_key: entity.categoryKey,
      date_en: entity.date.en,
      date_fa: entity.date.fa,
      amount: entity.amount,
      status: entity.status,
      initials: entity.initials,
      color: entity.color,
    };
  }
}
