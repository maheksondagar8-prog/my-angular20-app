import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../Services/users/user.service';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  private userService = inject(UserService);
  users = toSignal(this.userService.getAll(), { initialValue: [] });
}
