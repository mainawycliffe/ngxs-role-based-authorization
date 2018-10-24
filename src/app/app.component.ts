import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserRoleState } from './state/user-role.state';
import { ChangeUserRoleAction } from './state/user-role.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxs-role-based-authorization';

  public userRole: string = null;

  public GetUserRole$ = null;

  constructor(private store: Store) {}

  changeRole(role) {
    this.store.dispatch(new ChangeUserRoleAction(role));
  }

  ngOnInit() {
    this.GetUserRole$ = this.store
      .select(UserRoleState.getCurrentUserRole)
      .pipe(
        tap(res => {
          console.log(res);
        })
      );
  }
}
