import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor() { }

  public errorHandler(errorRes: any) {
    return throwError(errorRes.error.detail);
  }
}
