import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { PositionCreateResponse } from 'src/app/core/services/userPosition/position-create/position-create-response';

@Injectable({
  providedIn: 'root'
})
export class CentralNotifyService {

  _durationMessageInSeconds = 5;

  public notifyCreatePosition = new BehaviorSubject<PositionCreateResponse>(null!);
  public successInformation = new BehaviorSubject<string>(null!);
  public errorInformation = new BehaviorSubject<string>(null!);

  constructor(readonly snackBar: MatSnackBar) {
    this.errorInformation.subscribe((message) => {
      if (message != null) 
      {
        this.snackBar.open(message, "", {
          duration: this._durationMessageInSeconds * 1000,
          panelClass: ['error-snackbar']
        })
      }
    });

    this.successInformation.subscribe((message) => {
      if (message != null) 
      {
        this.snackBar.open(message, "", {
          duration: this._durationMessageInSeconds * 1000,
          panelClass: ['success-snackbar']
        })
      }
    });
  }
}
