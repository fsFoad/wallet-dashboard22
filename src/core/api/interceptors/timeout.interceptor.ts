import { HttpInterceptorFn } from '@angular/common/http';

export const timeoutInterceptor: HttpInterceptorFn = (req, next) => next(req);
