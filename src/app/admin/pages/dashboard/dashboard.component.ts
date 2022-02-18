import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  questionSets = [];
  selected: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }


  getQuestionSets(){}


}
