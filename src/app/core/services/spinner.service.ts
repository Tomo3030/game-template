import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  visible = new BehaviorSubject(false);

  constructor() {
  }
  show() {
    this.visible.next(true);
  }
  hide() {
    this.visible.next(false);
  }
}
