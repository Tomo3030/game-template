import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
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
  }

  ngOnInit(): void {
  }

  scrollToStep(index: number, el: HTMLElement){
    let scrollEl  = el.children[index];
    if(scrollEl){
      scrollEl.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
  }
}
