import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UserService } from '../../../Services/users/user.service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  id = input.required<string>();
  private userService = inject(UserService);

  user = toSignal(
    toObservable(this.id).pipe(
      switchMap(id => this.userService.getById(Number(id)))
    )
  );
}
