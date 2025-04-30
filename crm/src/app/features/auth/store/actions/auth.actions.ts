import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginData } from '../../model/login-data';
import { User } from '../../model/user';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login': props<{ loginData: LoginData }>(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: string | null }>(),
    'Logout': emptyProps()
    
  }
});
