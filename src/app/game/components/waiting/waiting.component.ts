import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {
  @Input() gameStatus!: 'waitingToStartSurvey' | 'doingSurvey' | 'doingMingle' | 'waitingToStartMingle';
  showMingleMessage!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showMingleMessage = this.gameStatus === 'waitingToStartMingle';
  }

}
