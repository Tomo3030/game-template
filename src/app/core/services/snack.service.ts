import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private snack: MatSnackBar) { }

  makeSnack(text:string) {
    this.snack.open(text, undefined, {
      duration: 4000,
    });
  }

  makeButtonSnack(text:string, button:string) {
    this.snack.open(text, button);
  }
}
