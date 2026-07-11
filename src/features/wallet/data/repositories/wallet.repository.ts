import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { WalletDashboardDto } from '../dto/wallet.dto';
import { TransactionDef } from '../../domain/models/wallet-dashboard.model';
import { WalletMapper } from '../mappers/wallet.mapper';
import { WalletResource } from '../resources/wallet.resource';

@Injectable({ providedIn: 'root' })
export class WalletRepository {
  private readonly resource = inject(WalletResource);
  private readonly mapper = inject(WalletMapper);

  getDashboard(): Observable<WalletDashboardDto> {
    return this.resource.getDashboard();
  }

  getTransactions(): Observable<TransactionDef[]> {
    return this.resource
      .getDashboard()
      .pipe(map((dto) => this.mapper.toEntityList(dto.transactions)));
  }
}
