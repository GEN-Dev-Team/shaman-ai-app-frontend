import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnswerComponent } from './user-answer.component';

describe('UserAnswerComponent', () => {
  let component: UserAnswerComponent;
  let fixture: ComponentFixture<UserAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
