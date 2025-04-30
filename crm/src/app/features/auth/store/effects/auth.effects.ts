import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  #actions$ = inject(Actions);
  #auth = inject(AuthService);
  #router = inject(Router);

  logout$ = createEffect(() => {
    return this.#actions$.pipe(
      ofType(
        AuthActions.logout
      ),
      map(() => {
        this.#router.navigate(['/login']);
      })
    )
  }, {
    dispatch: false
  })

  login$ = createEffect(() => {
    return this.#actions$.pipe(

      ofType(AuthActions.login),
      tap((action) => {
        console.log(action);
      }),
      exhaustMap(({loginData}) => 
        this.#auth.login(loginData).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    );
  })

  loadAuths$ = createEffect(() => {
    return this.#actions$.pipe(

      ofType(AuthActions.login),
      tap((action) => {
        console.log(action);
      }),
      exhaustMap(({loginData}) => 
        this.#auth.login(loginData).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    );
  });


  constructor(private actions$: Actions) {}
}
