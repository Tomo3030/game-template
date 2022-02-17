import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SnackService } from 'src/app/core/services/snack.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', './../../landing-styles.scss']
})
export class SignInComponent implements OnInit {
form!: FormGroup;
serverMessage:any;
user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private fb: FormBuilder,
    private spinner: SpinnerService,
    private snack: SnackService
  ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(6), Validators.required]]
    });
  }

  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }

  signIn(){}

  signInWithGoogle(){}

}
