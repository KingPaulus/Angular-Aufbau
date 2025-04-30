import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginData } from '../model/login-data';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/actions/auth.actions';
import { selectLoggedInState } from '../store/selectors/auth.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  #store = inject(Store)
  loggedIn$ = this.#store.select(selectLoggedInState);

    loginGroup = inject(FormBuilder).group({
      email: [
        'example@example.com',
        [
          Validators.required
        ],
      ],
      password: [
        '2tgaw3rt4grew',
        [
          Validators.required,
        ]
      ]
    })

  formSubmitHandler() {
    console.log(this.loginGroup.value);
    const loginData = this.loginGroup.value as LoginData;
    this.#store.dispatch(AuthActions.login({loginData}));
  }


}
