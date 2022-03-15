import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { PositionCreateRequest } from './position-create-request';
import { PositionCreateResponse } from './position-create-response';

@Injectable({
  providedIn: 'root'
})
export class PositionCreateService extends BaseServiceService {

  constructor(private http: HttpClient, protected centralNotifyService: CentralNotifyService) {
    super(centralNotifyService);
  }

  public createPosition(positionCreateRequest: PositionCreateRequest) {
    return this.http
      .post<PositionCreateResponse>(`${environment.api_domain}${paths.userPositions.postPosition}`, positionCreateRequest)
      .pipe(
        catchError((error) => {
          return this.errorHandler(error)
        }),
        tap((resData) => {          
          console.log('chegou', resData)
          this.centralNotifyService.notifyCreatePosition.next(resData);
          this.centralNotifyService.successInformation.next("Operação realizada com sucesso");
        })
    );
  }
}
