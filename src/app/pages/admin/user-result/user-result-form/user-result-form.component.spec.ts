import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResultFormComponent } from './user-result-form.component';

describe('UserResultFormComponent', () => {
  let component: UserResultFormComponent;
  let fixture: ComponentFixture<UserResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserResultFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
