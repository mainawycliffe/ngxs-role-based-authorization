import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserRoleAction } from './user-role.actions';

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

  @Action(UserRoleAction)
  ChangeRole(ctx: StateContext<UserRoleStateModel>, action: UserRoleAction) {
    ctx.setState({ role: action.role });
  }
}
