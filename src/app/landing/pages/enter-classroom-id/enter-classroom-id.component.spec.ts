import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterClassroomIdComponent } from './enter-classroom-id.component';

describe('EnterClassroomIdComponent', () => {
  let component: EnterClassroomIdComponent;
  let fixture: ComponentFixture<EnterClassroomIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterClassroomIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterClassroomIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
