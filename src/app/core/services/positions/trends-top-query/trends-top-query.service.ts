import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { TrendTop } from './trend-top';
import { TrendsTopRequest } from './trend-top-request';

@Injectable({
  providedIn: 'root'
})
export class TrendsTopQueryService extends BaseServiceService  {

  constructor(private http: HttpClient, protected centralNotifyService: CentralNotifyService) {
    super(centralNotifyService);
  }

  public getTrendTop(request: TrendsTopRequest) {
    return this.http
      .get<TrendTop[]>(`${environment.api_domain}${paths.positions.getTrendsTop}?LimitPositions=${request.limitPositions}&OperationType=${request.operationType}`)
      .pipe(
        catchError((error) => {
          return this.errorHandler(error)
        })
    );
  }
}
