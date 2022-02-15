import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsSignedInComponent } from './is-signed-in.component';

describe('IsSignedInComponent', () => {
  let component: IsSignedInComponent;
  let fixture: ComponentFixture<IsSignedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsSignedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsSignedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
