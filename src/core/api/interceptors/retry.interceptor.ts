import { HttpInterceptorFn } from '@angular/common/http';

export const retryInterceptor: HttpInterceptorFn = (req, next) => next(req);
