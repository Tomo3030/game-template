import { CdkStepper } from '@angular/cdk/stepper';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { stepperAnimation } from '@animations/step-animation';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}],
  animations: [stepperAnimation]
})
export class StepperComponent extends CdkStepper implements OnInit {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
    this._scrollToStep(index)
  }
  @Input() selectDisabled: boolean = false;

  ngOnInit(): void {
  }

  @ViewChild('stepper') stepper!: ElementRef;

  onStepSelect(index:number){
    if(!this.selectDisabled) this.selectStepByIndex(index);
  }

  private _scrollToStep(index: number){
    let scrollEl  =this.stepper.nativeElement.children[index];
    if(scrollEl){
      scrollEl.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
  }
}
