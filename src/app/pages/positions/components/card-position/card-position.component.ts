import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { PositionDto } from 'src/app/core/services/positions/positions-query/PositionDto';
import { PositionCreateService } from 'src/app/core/services/userPosition/position-create/position-create.service';
import { TextDialogComponent } from 'src/app/shared/components/text-dialog/text-dialog.component';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { PositionImageServiceService } from 'src/app/shared/services/position-image-service.service';


@Component({
  selector: 'app-card-position',
  templateUrl: './card-position.component.html',
  styleUrls: ['./card-position.component.css']
})
export class CardPositionComponent implements OnInit {

  @Input() position!: PositionDto;
  loading: boolean = false;

  constructor(public positionImageServiceService: PositionImageServiceService,
    public dialog: MatDialog,
    private centralNotifyService: CentralNotifyService,
    private positionCreateService: PositionCreateService
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
      this.positionCreateService.createPosition({ symbol: this.position.symbol, amount: result.value })
        .pipe(finalize(() => this.loading = false))
        .subscribe()
    });
  }

}
