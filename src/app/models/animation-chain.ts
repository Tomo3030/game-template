import { Subject } from "rxjs";

export class animationChain{
  public order: boolean[] = [];
  public events: Subject<string> = new Subject();
  private chain:string[] = [];
  private active = false;
  private i = 0;

  constructor(animations: string[]){
    this.chain = animations;
    this.order = animations.map(() => false)
  }

  public next(delay?: number){
    if(!this.active) return;
    setTimeout(() => {
      this.order[this.i] = true;
      if(!this.chain[this.i]) return this._finish();
      this.events.next(this.chain[this.i]);
      this.i++;
    }, delay);
  }

  public start(delay?: number){
    if(!this.order) return;
    setTimeout(() => {
      this.order = this.order.map(() => false);
      this.active = true;
      this.events.next('started')
      this.next();
    }, delay)
  }

  private _finish(){
    this.active = false;
    this.events.next('complete')
    this.events.complete();
  }
}
