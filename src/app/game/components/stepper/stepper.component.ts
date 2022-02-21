import { CdkStepper } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    this.scrollToStep(index)
  }

  ngOnInit(): void {
  }

  @ViewChild('stepper') stepper!: ElementRef;

  scrollToStep(index: number){
    let scrollEl  =this.stepper.nativeElement.children[index];
    if(scrollEl){
      scrollEl.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
  }
}
