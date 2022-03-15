import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { PositionDto } from './PositionDto';

@Injectable({
  providedIn: 'root'
})
export class PositionsQueryService extends BaseServiceService  {

  constructor(private http: HttpClient, protected centralNotifyService: CentralNotifyService) {
    super(centralNotifyService);
  }

  public getPositions() {
    return this.http
      .get<PositionDto[]>(`${environment.api_domain}${paths.positions.getAll}`)
      .pipe(
        catchError((error) => {
          return this.errorHandler(error)
        })
    );
  }
}
