import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PositionDto } from 'src/app/core/services/positions/positions-query/PositionDto';
import { PositionsQueryService } from 'src/app/core/services/positions/positions-query/positions-query.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  public Positions: PositionDto[] = [];

  constructor(    
    private titleService: Title,
    private positionsQueryService: PositionsQueryService
  ) { 
    this.titleService.setTitle('Positions');
  }

  ngOnInit(): void {
    this.positionsQueryService.getPositions().subscribe((resData) => this.Positions = resData)
  }
}