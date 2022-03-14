import { Component, Input, OnInit } from '@angular/core';
import { PatrimonyPosition } from 'src/app/core/services/userPosition/patrimony-query/patrimony-position';

@Component({
  selector: 'app-card-position',
  templateUrl: './card-position.component.html',
  styleUrls: ['./card-position.component.css']
})
export class CardPositionComponent implements OnInit {
  
  @Input() patrimonyPosition!: PatrimonyPosition;

  constructor() { }

  ngOnInit(): void {
  }
}
