import { BehaviorSubject } from 'rxjs';
import { DbService } from './../../../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { SnackService } from 'src/app/core/services/snack.service';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.scss', './../../landing-styles.scss']
})
export class EnterNameComponent implements OnInit {
classroomId: string | null = null;
name: string = '';
user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private route: ActivatedRoute,
    private snack: SnackService,
    private db: DbService,
    private router: Router,
    private spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.classroomId = this.route.snapshot.paramMap.get('classroomId');
  }

  onSubmit(){}

  onContinue(name:string){}

}
