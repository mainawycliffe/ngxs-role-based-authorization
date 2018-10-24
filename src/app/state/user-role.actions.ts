export class ChangeUserRoleAction {
  static readonly type = '[UserRole] Add role';
  constructor(public role: 'guest' | 'moderator' | 'admin') {}
}
