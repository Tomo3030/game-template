import { EventEmitter, Injectable, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AnimationChainerService {
  public order: boolean[] = [];
  private started = false;
  private i = 0;
  @Output() chainComplete = new EventEmitter();

  constructor() { }

  public new(animations: string[]) {
    this.order = animations.map(() => false)
  }

  public next(delay?: number) {
    if (!this.started) return;
    setTimeout(() => {
      this.order[this.i] = true;
      this.i++;
    }, delay);
  }


  public start(delay?: number) {
    if (!this.order) return;
    setTimeout(() => {
      this.order = this.order.map(() => false);
      this.started = true;
      this.next();
    }, delay)
  }

  public finish() {
    this.started = false;
    this.chainComplete.emit();
  }
}


