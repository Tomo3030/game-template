import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MingleInputComponent } from './mingle-input.component';

describe('MingleInputComponent', () => {
  let component: MingleInputComponent;
  let fixture: ComponentFixture<MingleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MingleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MingleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
