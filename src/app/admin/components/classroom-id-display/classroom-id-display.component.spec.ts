import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomIdDisplayComponent } from './classroom-id-display.component';

describe('ClassroomIdDisplayComponent', () => {
  let component: ClassroomIdDisplayComponent;
  let fixture: ComponentFixture<ClassroomIdDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomIdDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomIdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
