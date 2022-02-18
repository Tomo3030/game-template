import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionSetCardComponent } from './select-question-set-card.component';

describe('SelectQuestionSetCardComponent', () => {
  let component: SelectQuestionSetCardComponent;
  let fixture: ComponentFixture<SelectQuestionSetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectQuestionSetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuestionSetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
