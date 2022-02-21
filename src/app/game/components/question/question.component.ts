import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  @Input() control!: any;

  constructor() { }

  ngOnInit(): void {
  }

  incrementValue(){}
  decrementValue(){}

}
