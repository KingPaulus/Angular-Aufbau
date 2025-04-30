import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLoggedInState } from '../store/selectors/auth.selectors';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectLoggedInState)
  .pipe(
    tap((isLoggedIn) => {
      if(!isLoggedIn) {
        router.navigate(['/login'])
      }
    })
  )
};
