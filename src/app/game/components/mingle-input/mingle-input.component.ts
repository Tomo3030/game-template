import { SnackService } from './../../../core/services/snack.service';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { shake } from '@animations/shake';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mingle-input',
  templateUrl: './mingle-input.component.html',
  styleUrls: ['./mingle-input.component.scss'],
})
export class MingleInputComponent implements OnInit {
  @ViewChild('trigger') trigger!: MatAutocompleteTrigger
  @Input()checking = false;
  @Input()control!:FormControl;
  @Input() selectList!: string[];


  filteredNames! : Observable<string[]>



  constructor() { }

  ngOnInit(): void {
    this.filteredNames = this.control.valueChanges.pipe(
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    if(!value) return [];
    const filterValue = this._normalizeValue(value);
    return this.selectList.filter(name => this._normalizeValue(name).includes(filterValue));

}

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
