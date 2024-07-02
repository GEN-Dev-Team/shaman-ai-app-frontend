import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnswerFormComponent } from './user-answer-form.component';

describe('UserAnswerFormComponent', () => {
  let component: UserAnswerFormComponent;
  let fixture: ComponentFixture<UserAnswerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAnswerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
