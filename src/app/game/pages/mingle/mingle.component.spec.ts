import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingleComponent } from './mingle.component';

describe('MingleComponent', () => {
  let component: MingleComponent;
  let fixture: ComponentFixture<MingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
