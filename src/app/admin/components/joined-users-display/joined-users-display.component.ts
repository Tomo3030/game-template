import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'joined-users-display',
  templateUrl: './joined-users-display.component.html',
  styleUrls: ['./joined-users-display.component.scss']
})
export class JoinedUsersDisplayComponent implements OnInit {
  @Input() joinedUsers!:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
