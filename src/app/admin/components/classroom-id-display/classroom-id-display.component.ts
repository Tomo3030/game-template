import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'classroom-id-display',
  templateUrl: './classroom-id-display.component.html',
  styleUrls: ['./classroom-id-display.component.scss']
})
export class ClassroomIdDisplayComponent implements OnInit {
  @Input() classroomId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
