import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { PatrimonyPosition } from 'src/app/core/services/userPosition/patrimony-query/patrimony-position';
import { PositionCreateService } from 'src/app/core/services/userPosition/position-create/position-create.service';
import { TextDialogComponent } from 'src/app/shared/components/text-dialog/text-dialog.component';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { PositionImageServiceService } from 'src/app/shared/services/position-image-service.service';

@Component({
  selector: 'app-card-user-position',
  templateUrl: './card-user-position.component.html',
  styleUrls: ['./card-user-position.component.css']
})
export class CardUserPositionComponent implements OnInit {
  
  @Input() patrimonyPosition!: PatrimonyPosition;
  loading: boolean = false;

  constructor(public positionImageServiceService: PositionImageServiceService,
    public dialog: MatDialog,
    private positionCreateService: PositionCreateService,
    private centralNotifyService: CentralNotifyService
  ) { 
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TextDialogComponent, {
      width: '250px',
      data: {title: "Informe a quantidade", type: "number"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == null)
        return

      if (result.value <= 0) {
        this.centralNotifyService.errorInformation.next("Esse valor não é valido para a operação.")
        return
      }
        
      this.loading = true;
      this.positionCreateService.createPosition({ symbol: this.patrimonyPosition.symbol, amount: result.value * -1 })
        .pipe(finalize(() => this.loading = false))
        .subscribe()
    });
  }
}
