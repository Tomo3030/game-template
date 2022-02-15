import { DbService } from './../../../shared/services/db.service';


import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/core/services/snack.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-classroom-id',
  templateUrl: './enter-classroom-id.component.html',
  styleUrls: ['./enter-classroom-id.component.scss']
})
export class EnterClassroomIdComponent implements OnInit {
  id:number | undefined;
  constructor(
    private spinner: SpinnerService,
    private snack: SnackService,
    private db:DbService,
    private router:Router

    ) { }

  ngOnInit(): void {
  }


  async onSubmit(){
    if(!this.isValid()){
      //make shake
      this.id = undefined;
      return this.snack.makeSnack("Invalid classroom Id");

    }
    this.spinner.show();
    let exists = await this.db.classroomExists(this.id!.toString());
    this.spinner.hide();
    if(!exists) return this.snack.makeSnack("Classroom does not exist");
    this.router.navigateByUrl(`/classroom/${this.id}`);
  }


  isValid():boolean{
    if(this.id && this.id >= 100000 && this.id <= 999999){
      return true;
    } else {
      return false;
    }
  }

}
