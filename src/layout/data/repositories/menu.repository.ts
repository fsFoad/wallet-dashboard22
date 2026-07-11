import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { MenuItem } from '../../domain/models/menu-item.model';
import { MenuMapper } from '../mappers/menu.mapper';
import { MenuResource } from '../resources/menu.resource';

@Injectable({ providedIn: 'root' })
export class MenuRepository {
  private readonly resource = inject(MenuResource);
  private readonly mapper = inject(MenuMapper);

  getAllMenuByUser(): Observable<MenuItem[]> {
    return this.resource.getAllMenuByUser().pipe(
      map((response) => this.mapper.extractMenuItems(response)),
      catchError((error) => {
        console.error('[MenuRepository] failed to load menu', error);
        throw error;
      }),
    );
  }
}
