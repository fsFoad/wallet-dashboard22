import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClient } from './api-client';

export interface ResourceEndpoints {
  list?: string;
  detail?: (id: string) => string;
  create?: string;
  update?: (id: string) => string;
  remove?: (id: string) => string;
}

@Injectable({ providedIn: 'root' })
export class ResourceFactory {
  private readonly api = inject(ApiClient);

  create<T, C = unknown, U = unknown>(endpoints: ResourceEndpoints) {
    return {
      list: (): Observable<T[]> =>
        this.api.get<T[]>(endpoints.list ?? '/'),

      getById: (id: string): Observable<T> =>
        this.api.get<T>(endpoints.detail?.(id) ?? `/${id}`),

      create: (payload: C): Observable<T> =>
        this.api.post<T>(endpoints.create ?? '/', payload),

      update: (id: string, payload: U): Observable<T> =>
        this.api.put<T>(endpoints.update?.(id) ?? `/${id}`, payload),

      remove: (id: string): Observable<void> =>
        this.api.delete<void>(endpoints.remove?.(id) ?? `/${id}`),
    };
  }
}
