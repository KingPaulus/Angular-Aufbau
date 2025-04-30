import { Injectable } from '@angular/core';
import { LoginData } from '../model/login-data';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(LoginData: LoginData): Observable<User> {
    console.log(LoginData);

    return of({
      id: 34,
      name: "Tim Taler"
    } as User)
  }
}
