import { Component, OnInit } from '@angular/core';
import { PatrimonyQueryService } from 'src/app/core/services/userPosition/patrimony-query/patrimony-query.service';
import { PatrimonyResponse } from 'src/app/core/services/userPosition/patrimony-query/patrimony-response';
import { UserInformationsService } from 'src/app/core/services/users/user-information/user-informations.service';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public patrimony!: PatrimonyResponse;
  private notifyCreatePosition: any;
  private notifyGetPatrimony: any;

  constructor(private patrimonyQuery: PatrimonyQueryService,
    public userInformationsService: UserInformationsService,
    private centralNotifyService: CentralNotifyService,
    private titleService: Title
  ) { 
    this.titleService.setTitle('Meu Patrimônio');    
  }

  ngOnDestroy() {
    this.notifyCreatePosition.unsubscribe();
    this.notifyGetPatrimony.unsubscribe();
  }

  ngOnInit(): void {
    this.notifyGetPatrimony = this.patrimonyQuery.getPatrimony().subscribe((resData) => this.patrimony = resData)

    this.notifyCreatePosition = this.centralNotifyService.notifyCreatePosition.subscribe((userPositionResponse) => {
      if (userPositionResponse == null || this.patrimony == null) 
        return
      
      const positionIndex = this.patrimony.positions.findIndex(i => i.symbol == userPositionResponse.symbol)
      if (positionIndex < 0)
        return

      const position = this.patrimony.positions[positionIndex]
      position!.amount += userPositionResponse.amount      

      if (userPositionResponse.amount > 0) {
        this.patrimony.positions.push({
          symbol: userPositionResponse.symbol,
          amount: userPositionResponse.amount,
          currentPrice: userPositionResponse.price
        })
      } else {
        if (position!.amount == 0)
          this.patrimony.positions.splice(positionIndex, 1)
      }
    });
  }

  get TotalPositions() {
    if (this.patrimony != null) {
      const initialValue = 0;
      return this.patrimony.positions.reduce((previousValue, currentValue) => previousValue + currentValue.currentPrice * currentValue.amount, initialValue)
    }      
    return 0
  }
}