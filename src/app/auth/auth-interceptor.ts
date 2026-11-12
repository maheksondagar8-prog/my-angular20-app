import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const token = isPlatformBrowser(platformId) ? localStorage.getItem('token') : null;
  const isApiRequest = req.url.startsWith('http://localhost:3000/api/');
  const isLoginRequest = req.url.endsWith('/api/login');

  if (token && isApiRequest && !isLoginRequest) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};
