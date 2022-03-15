import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TrendTop } from 'src/app/core/services/positions/trends-top-query/trend-top';
import { MatDialog } from '@angular/material/dialog';
import { TextDialogComponent } from 'src/app/shared/components/text-dialog/text-dialog.component';
import { PositionImageServiceService } from 'src/app/shared/services/position-image-service.service';
import { PositionCreateService } from 'src/app/core/services/userPosition/position-create/position-create.service';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-card-trend-top',
  templateUrl: './card-trend-top.component.html',
  styleUrls: ['./card-trend-top.component.css']
})
export class CardTrendTopComponent implements OnInit {
  @Input() trendTop!: TrendTop;
  loading: boolean = false;

  constructor(public positionImageServiceService: PositionImageServiceService,
    public dialog: MatDialog,
    private positionCreateService: PositionCreateService,
    private centralNotifyService: CentralNotifyService
  ) { }

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
      this.positionCreateService.createPosition({ symbol: this.trendTop.symbol, amount: result.value })
        .pipe(finalize(() => this.loading = false))
        .subscribe()
    });
  }
}
