import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  erroPadrao = "ops! Verifique os dados e tente novamente.";

  constructor(protected centralNotifyService: CentralNotifyService) { }

  public errorHandler(errorRes: any) {    
    let message = errorRes.error != null ? errorRes.error.detail ?? this.erroPadrao : this.erroPadrao
    this.centralNotifyService.errorInformation.next(message);
    return throwError(errorRes.error.detail);    
  }
}
