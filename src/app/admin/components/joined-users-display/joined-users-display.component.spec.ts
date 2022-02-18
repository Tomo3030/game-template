import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedUsersDisplayComponent } from './joined-users-display.component';

describe('JoinedUsersDisplayComponent', () => {
  let component: JoinedUsersDisplayComponent;
  let fixture: ComponentFixture<JoinedUsersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinedUsersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedUsersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
