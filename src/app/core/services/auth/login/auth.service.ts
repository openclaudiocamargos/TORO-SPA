import { Injectable } from '@angular/core';
import { Credentials } from './credentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import paths from '../../paths';
import { BehaviorSubject, throwError } from 'rxjs';
import { LoginResponse } from './login-response';
import { User } from '../../../data/models/auth/user';
import { BaseServiceService } from '../../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseServiceService {
  
  user = new BehaviorSubject<User>(null!);
  
  constructor(private http: HttpClient) {
    super();
  }

  public login(credentials: Credentials) {
    return this.http
      .post<LoginResponse>(`${environment.api_domain}${paths.users.PostLogin}`, credentials)
      .pipe(
        catchError((error) => {
          return this.errorHandler(error)
        }),
        tap((resData) => {
          this.authenticationHandler(resData);
        })
    );
  }

  public isLogged() {
    return localStorage.getItem('user') !== null;
  }

  public logout(){
    localStorage.removeItem('user');
  }

  private authenticationHandler(resData: LoginResponse) {
    const user = new User(
      resData.firstName,
      resData.lastName,
      resData.token
    );
    this.user.next(user)
    localStorage.setItem('user', JSON.stringify(user));
  }

  autoSignIn() {
    const storageUser = localStorage.getItem('user')
    if (storageUser != null) {
      const user = JSON.parse(storageUser)
      const loadedUser = new User(
        user._firstName,
        user._lastName,
        user._token
      );

      this.user.next(loadedUser);
    }
    else {
      return;
    }
  }
}