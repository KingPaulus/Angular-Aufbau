import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthActions } from '../features/auth/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { selectLoggedInState } from '../features/auth/store/selectors/auth.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  #store = inject(Store)
  loggedIn$ = this.#store.select(selectLoggedInState);

  logout() {
    this.#store.dispatch(AuthActions.logout());
  }

}
