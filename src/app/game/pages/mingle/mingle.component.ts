import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, startWith, tap } from 'rxjs/operators';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'mingle',
  templateUrl: './mingle.component.html',
  styleUrls: ['./mingle.component.scss']
})
export class MingleComponent implements OnInit {
  @ViewChild('trigger') trigger!: MatAutocompleteTrigger
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

filteredNames! : Observable<string[]>

control = new FormControl;


  constructor() { }

  ngOnInit(): void {
    this.filteredNames = this.control.valueChanges.pipe(
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    if(!value) return [];
    const filterValue = this._normalizeValue(value);
    return this.names.filter(name => this._normalizeValue(name).includes(filterValue));

}

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


}
