import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
    fromAuth.authsFeatureKey
);

export const selectLoggedInState = createSelector(
    selectAuthState,
    (state) => {
        return !!state.user;
    }
)