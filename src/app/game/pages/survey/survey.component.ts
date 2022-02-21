import { GameQuestion } from './../../../models/game-question';
import { StepperComponent } from './../../components/stepper/stepper.component';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  @ViewChild('stepper') myStepper!: StepperComponent;

  @Input() surveyQuestions!: GameQuestion[]

    myForm = this.fb.group({});
    formObservable = this.myForm.valueChanges;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.formObservable.subscribe(value => {
      console.log(value);
    })


  }

  createForm(){
    this.surveyQuestions.forEach((question,i) => {
      this.myForm.addControl(`${i}`, this.fb.control('', Validators.required));
     })
  }

  onNext(currentIndex:number){
    if(currentIndex < this.surveyQuestions.length-1){
      this.myStepper.selectStepByIndex(currentIndex+1);
    } else {
      let unanswered = Object.keys(this.myForm.controls).find(key => this.myForm.value[key]=== '');
      if(unanswered) this.myStepper.selectStepByIndex(Number(unanswered));
    }
  }

  onSubmit(){}
}
