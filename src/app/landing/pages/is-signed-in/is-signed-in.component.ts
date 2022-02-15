import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'is-signed-in',
  templateUrl: './is-signed-in.component.html',
  styleUrls: ['./is-signed-in.component.scss']
})
export class IsSignedInComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }
  signOut(){
    //this.userService.signOut();
  }
  continue(){
    //this.continueEvent.emit()
  }

}
