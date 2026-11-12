import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

interface LoginResponse {
  token: string;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  private api = 'http://localhost:3000/api';
  private _token = signal<string | null>(this.readToken());

  isLoggedIn = computed(() => !!this._token());

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(`${this.api}/login`, { email, password })
      .pipe(
        tap((response) => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', response.token);
          }
          this._token.set(response.token);
        })
      );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  private readToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
  }
}
