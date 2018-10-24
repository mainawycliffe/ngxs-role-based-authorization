export class UserRoleAction {
  static readonly type = '[UserRole] Add role';
  constructor(public role: 'guest' | 'moderator' | 'admin') {}
}
