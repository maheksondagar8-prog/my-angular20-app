import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private api = 'https://jsonplaceholder.typicode.com/users';

  getAll() {
    return this.http.get<User[]>(this.api);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.api}/${id}`);
  }

  create(user: Omit<User, 'id'>) {
    return this.http.post<User>(this.api, user);
  }

  update(id: number, user: Partial<User>) {
    return this.http.put<User>(`${this.api}/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
