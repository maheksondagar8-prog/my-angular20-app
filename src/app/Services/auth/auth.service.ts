import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private _token = signal<string | null>(null);
  isLoggedIn = computed(() => !!this._token());

  // Fake login for testing. Replace with an HTTP call later.
  login(email: string, password: string): boolean {
    if (email === 'admin@test.com' && password === '123456') {
      this._token.set('fake-jwt-token');
      return true;
    }
    return false;
  }

  logout() {
    this._token.set(null);
    this.router.navigate(['/login']);
  }
}
