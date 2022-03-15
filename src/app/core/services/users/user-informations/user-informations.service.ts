import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { UserInformationsResponse } from '../user-information/user-informations-response';

@Injectable({
  providedIn: 'root'
})
export class UserInformationsService extends BaseServiceService {
  
  public userInformations!: UserInformationsResponse;

  constructor(private http: HttpClient, protected centralNotifyService: CentralNotifyService) {
    super(centralNotifyService);
  }

  public getInformations() {
    return this.http
      .get<UserInformationsResponse>(`${environment.api_domain}${paths.users.GetInformation}`)
      .pipe(        
        catchError((error) => {
          return this.errorHandler(error)
        }),
        tap((resData) => {
          this.userInformations = resData;
        })        
    );
  }
}