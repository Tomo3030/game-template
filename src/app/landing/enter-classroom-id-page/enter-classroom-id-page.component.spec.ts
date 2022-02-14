import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterClassroomIdPageComponent } from './enter-classroom-id-page.component';

describe('EnterClassroomIdPageComponent', () => {
  let component: EnterClassroomIdPageComponent;
  let fixture: ComponentFixture<EnterClassroomIdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterClassroomIdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterClassroomIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
