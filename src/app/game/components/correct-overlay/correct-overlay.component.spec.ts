import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectOverlayComponent } from './correct-overlay.component';

describe('CorrectOverlayComponent', () => {
  let component: CorrectOverlayComponent;
  let fixture: ComponentFixture<CorrectOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
