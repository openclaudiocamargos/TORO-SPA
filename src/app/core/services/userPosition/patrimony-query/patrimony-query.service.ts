import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { PatrimonyResponse } from './patrimony-response';

@Injectable({
  providedIn: 'root'
})
export class PatrimonyQueryService extends BaseServiceService {

  constructor(private http: HttpClient, protected centralNotifyService: CentralNotifyService) {
    super(centralNotifyService);
  }

  public getPatrimony() {
    return this.http
      .get<PatrimonyResponse>(`${environment.api_domain}${paths.userPositions.getPatrimony}`)
      .pipe(
        catchError((error) => {
          return this.errorHandler(error)
        })
    );
  }
}
