import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { User } from '../../model/user';

export const authsFeatureKey = 'auths';

export interface State {
  user: null | User
  loading: boolean,
  error: string | null,
}


export const initialState: State = {
  user: null,
  loading: true,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, state => state),
  on(AuthActions.loginSuccess, (state, {user}) => {
    return {
      ...state,
      user
    }
  }),
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: null,
    }
  })
);

export const authsFeature = createFeature({
  name: authsFeatureKey,
  reducer,
});

