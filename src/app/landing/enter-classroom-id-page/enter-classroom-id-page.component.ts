import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-classroom-id-page',
  templateUrl: './enter-classroom-id-page.component.html',
  styleUrls: ['./enter-classroom-id-page.component.scss']
})
export class EnterClassroomIdPageComponent implements OnInit {
  id = '';
  private idLength = 6;

  constructor() { }

  ngOnInit(): void {}

  isValidId(id: string): boolean {
    let isNum = /^\d+$/.test(this.id);
    if(isNum && this.id.length === this.idLength) {
      return true;
    } else {
      return false;
    }
  }

  checkLength(){
    console.log('check')
  }
  onSubmitId() {
    if(this.isValidId(this.id)) {
      //
    } else{
      //not valid
    }
  }
}




