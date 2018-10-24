import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ChangeUserRoleAction } from './user-role.actions';

export class UserRoleStateModel {
  public role: 'guest' | 'moderator' | 'admin';
}

@State<UserRoleStateModel>({
  name: 'userRole'
})
export class UserRoleState {
  @Selector()
  static getCurrentUserRole(state: UserRoleStateModel) {
    return state.role;
  }

  @Action(ChangeUserRoleAction)
  ChangeRole(
    ctx: StateContext<UserRoleStateModel>,
    action: ChangeUserRoleAction
  ) {
    ctx.setState({ role: action.role });
  }
}
