import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseServiceService } from '../../base-service.service';
import paths from '../../paths';
import { PatrimonyResponse } from './patrimony-response';

@Injectable({
  providedIn: 'root'
})
export class PatrimonyQueryService extends BaseServiceService {

  constructor(private http: HttpClient) {
    super();
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
  errorHandler(error: any): any {
    throw new Error('Method not implemented.');
  }
}
