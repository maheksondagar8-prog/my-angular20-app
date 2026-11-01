import { Injectable , signal, computed  } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token = signal<string | null>(null);
  isLoggedIn = computed(() => !!this._token());
}
