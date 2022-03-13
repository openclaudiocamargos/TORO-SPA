import { Injectable } from '@angular/core';
import { Credentials } from '../../interfaces/auth/credentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import paths from '../paths';
import { throwError } from 'rxjs';
import { LoginResponse } from '../../interfaces/auth/login-response.model';
import { User } from '../../data/models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public tst = true;

  constructor(private http: HttpClient) { }

  public login(credentials: Credentials) {
    console.log('valor', credentials)
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
    return localStorage.getItem('token') !== null;
  }

  public logout(){
    localStorage.removeItem('token');
  }

  private authenticationHandler(resData: LoginResponse) {
    if (resData == null) {
      console.log('404')
    }
    const user = new User(
      resData.firstName,
      resData.lastName,
      resData.token
    );
    localStorage.setItem('token', resData.token);
  }

  private errorHandler(errorRes: any) {
    return throwError(errorRes.error.detail);
  }
}