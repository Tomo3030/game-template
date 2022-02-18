import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent implements OnInit {
  @Input()question = {};

  constructor() { }

  ngOnInit(): void {
  }
}
