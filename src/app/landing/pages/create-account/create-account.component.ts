import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { SnackService } from 'src/app/core/services/snack.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  form : any;
  serverMessage :any;

  constructor(
    private fb: FormBuilder,
    private snack: SnackService,
    private spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      userName:["",[Validators.required]],
      password: ["", [Validators.minLength(6), Validators.required]],
      confirmPass:["", [Validators.required]]},{validators: this.passwordMatchingValidatior});
  }

  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get confirmPass(){
    return this.form.get("confirmPass");
  }
  get userName(){
    return this.form.get('userName')
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPass')?.value;
    if(password && confirmPassword && password === confirmPassword) {
      this.form.get('confirmPass').setErrors(null);
      return null;
    }
    if(password && confirmPassword && password !== confirmPassword) {
      this.form.get('confirmPass').setErrors({'not_matched': true});
      return {'not_matched': true};
    }
    return null;
  };

  submit(){}

}
