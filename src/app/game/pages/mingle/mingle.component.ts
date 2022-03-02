import { stepperAnimation } from './../../../animations/step-animation';
import { overlayInOut } from './../../../animations/overlay-in-out';
import { SnackService } from './../../../core/services/snack.service';
import { shake } from './../../../animations/shake';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, startWith, tap } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'mingle',
  templateUrl: './mingle.component.html',
  styleUrls: ['./mingle.component.scss'],
  animations: [shake, overlayInOut, stepperAnimation]
})
export class MingleComponent implements OnInit {
  shake = false;
  checking = false;
  overlay = true;
  control = new FormControl;



names = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
  '정민'
];




  constructor(private snack: SnackService) { }

  ngOnInit(): void {

  }

  checkAnswer(){
    this.checking = true;
    setTimeout(() => {
      this._isWrong()
      //this._isCorrect();
    }, 2000);


  }

  private _isCorrect(){
    this.checking = false;
    this.toggleOverlay()
  }

  private _isWrong(){
    this.checking = false;
    this.shake = !this.shake;
    setTimeout(() => {
    this.control.setValue('');
    this.snack.makeSnack('Incorrect, try again!');
    }, 800);
  }

  toggleOverlay(){
    console.log('toggleOverlay')
    this.overlay = !this.overlay;
  }






}
