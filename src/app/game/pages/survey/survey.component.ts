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

  @Input() surveyQuestions = [
    {
      options:['Yes', 'No'],
      question: "Have you been to Europe?",
      questionType: "radio"},
    {
      options: ['Yes', 'No'],
      question: "Have you been to Austrailia?",
      questionType: "radio"
    },
    {
      question: "How many countries have you traveled to?",
      questionType: "number"
    },
    {
      question: "What is your favorite country you have travelled to?",
      questionType: "text"
    },
    {
      options:['Yes', 'No'],
      question: "Have you ever traveled to another country alone?",
      questionType: "radio"
    },
    {
      options: ['alone', 'family', 'friends'],
      question: "Do you prefer to travel alone, with your family, or with friends?",
      questionType: "radio"
    },
    {
      question: "What country would you like to visit on your next vacation?",
      questionType: "text"
    },{
      options: ['travel', 'explore', 'relax', 'cook', 'play', 'learn', 'sleep'],
      question: "What do you like to do on vacation?",
      questionType: "radio"
    },
    {
      question: "How old were you when you first went abroad?",
      questionType: "number"
    }];

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
