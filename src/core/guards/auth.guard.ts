import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthService } from '@core/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  inject(AuthService);
  return true;
};
