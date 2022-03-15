import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TrendTop } from 'src/app/core/services/positions/trends-top-query/trend-top';
import { TrendsTopRequest } from 'src/app/core/services/positions/trends-top-query/trend-top-request';
import { TrendsTopQueryService } from 'src/app/core/services/positions/trends-top-query/trends-top-query.service';
import { CentralNotifyService } from 'src/app/shared/services/central-notify.service';

@Component({
  selector: 'app-trends-topic',
  templateUrl: './trends-topic.component.html',
  styleUrls: ['./trends-topic.component.css']
})
export class TrendsTopicComponent implements OnInit {

  public TrendTopSell: TrendTop[] = [];
  public TrendTopBuy: TrendTop[] = [];
  private notifyCreatePosition: any;

  constructor(private trendsTopQuery: TrendsTopQueryService,
    private centralNotifyService: CentralNotifyService,
    private titleService: Title
  ) { 
    this.titleService.setTitle('Trends Top');
  }

  ngOnDestroy() {
    this.notifyCreatePosition.unsubscribe();
  }

  ngOnInit(): void {
    this.notifyCreatePosition = this.centralNotifyService.notifyCreatePosition.subscribe((userPositionResponse) => {
      if (userPositionResponse == null) 
        return
      
      const list = userPositionResponse.amount > 0 ? this.TrendTopBuy : this.TrendTopSell;
      const trendIndex = list.findIndex(i => i.symbol == userPositionResponse.symbol)
      if (trendIndex < 0)
        return

      const trend = list[trendIndex]
      trend!.totalAmount += Math.abs(userPositionResponse.amount)
      list.sort(function(a, b){return b.totalAmount - a.totalAmount});
    });    

    const requestBuy: TrendsTopRequest = { limitPositions: 5, operationType: 1 };
    this.trendsTopQuery.getTrendTop(requestBuy).subscribe((resData) => this.TrendTopBuy = resData)

    const requestSell: TrendsTopRequest = { limitPositions: 5, operationType: -1 };
    this.trendsTopQuery.getTrendTop(requestSell).subscribe((resData) => this.TrendTopSell = resData)
  }
}
