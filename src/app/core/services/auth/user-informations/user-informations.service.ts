import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { UserInformationsResponse } from './user-informations-response';

@Injectable({
  providedIn: 'root'
})
export class UserInformationsService extends BaseServiceService {
  
  userInformation = new BehaviorSubject<UserInformationsResponse>(null!);

  constructor(private http: HttpClient) {
    super();
  }

  public getInformations() {
    return this.http
      .get<UserInformationsResponse>(`${environment.api_domain}${paths.users.GetInformation}`)
      .pipe(        
        catchError((error) => {
          return this.errorHandler(error)
        }),
        tap((resData) => {
          this.userInformation.next(resData);
        })        
    );
  }
}