import { Component, OnInit } from '@angular/core';
import { PatrimonyQueryService } from 'src/app/core/services/userPosition/patrimony-query/patrimony-query.service';
import { PatrimonyResponse } from 'src/app/core/services/userPosition/patrimony-query/patrimony-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public patrimony!: PatrimonyResponse;

  constructor(private patrimonyQuery: PatrimonyQueryService) { }

  ngOnInit(): void {
    this.patrimonyQuery.getPatrimony().subscribe((resData) => this.patrimony = resData)
  }
}