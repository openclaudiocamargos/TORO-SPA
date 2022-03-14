import { Component, OnInit } from '@angular/core';
import { PatrimonyQueryService } from 'src/app/core/services/userPosition/patrimony-query/patrimony-query.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private patrimonyQuery: PatrimonyQueryService) { }

  ngOnInit(): void {
    this.patrimonyQuery.getPatrimony().subscribe((result) => console.log('result', result))
  }
}