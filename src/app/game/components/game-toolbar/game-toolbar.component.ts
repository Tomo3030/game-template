import { GameStatus } from './../../../models/game-status';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent implements OnInit {
  @Input() gameStatus!: GameStatus;
  @Input() score?: number = 0;
  displayView? : 'survey' | 'mingle';



  constructor() { }

  ngOnInit(): void {
    this.displayView = this.gameStatus === 'doingSurvey' ? 'survey' : 'mingle';
  }





}


