import { Component, OnInit } from '@angular/core';
import { GameStatus } from 'src/app/models/game-status';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameStatus: GameStatus = 'doingSurvey';
  score?: number;
  surveyQuestions = [];


  constructor() { }

  ngOnInit(): void {
  }




}
