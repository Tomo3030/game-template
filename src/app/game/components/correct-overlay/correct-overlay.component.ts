import { jello } from './../../../animations/jello';
import { scaleInOut } from '@animations/scale-in-out';
import { dropInOut } from '@animations/drop-in-out';
import { Component, EventEmitter, OnInit, Output, ɵɵsetComponentScope } from '@angular/core';
import { animationChain } from 'src/app/models/animation-chain';

@Component({
  selector: 'correct-overlay',
  templateUrl: './correct-overlay.component.html',
  styleUrls: ['./correct-overlay.component.scss'],
  animations: [dropInOut, scaleInOut, jello]
})
export class CorrectOverlayComponent implements OnInit {
  @Output() correctAnimationComplete = new EventEmitter();
  showScore = false;
  score = 3
  chain!:animationChain;






  constructor() { }

  ngOnInit(): void {
    this.chain = new animationChain(['dropIn', 'scaleIn', 'jello']);
    this.chain.events.subscribe(e=>{
      if(e === 'complete')this.correctAnimationComplete.emit();
    })
    this._showScore();
    this.chain.start(700);
  }

  _showScore(){
    setTimeout(() => {this.showScore = true;},2000);
  }

  log(e:any){
    if(!e.totalTime)return;
    setTimeout(()=>{
      this.score++
    },800)
  }
}
