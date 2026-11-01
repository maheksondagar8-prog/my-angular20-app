import { Routes } from '@angular/router';
// import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'users',
    canActivate: [],
    loadComponent: () => import('./components/users/user-list/user-list').then((m) => m.UserList),
  },
  {
    path: 'users/:id',
    canActivate: [],
    loadComponent: () => import('./components/users/user-detail/user-detail').then((m) => m.UserDetail),
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' },
];
