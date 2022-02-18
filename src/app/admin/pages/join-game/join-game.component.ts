import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  classroomId: any;
  joined = [
    'John',
    'Jane',
    'Joe',
    'Jill',
    'Jack',
    'Jill',
    'Bob',
    'Bobby',
    'Fred',
    'Freddy',
    'Charles',
    'Charlie',
    'Cindy',
    'Cinderella',
    'Molly',
    'Mollie',
    'Sam',
    'Samantha',
    'Sally',
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.classroomId = this.route.snapshot.paramMap.get('classroomId');


  }

}
