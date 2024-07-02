import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacSignFormComponent } from './zodiac-sign-form.component';

describe('ZodiacSignFormComponent', () => {
  let component: ZodiacSignFormComponent;
  let fixture: ComponentFixture<ZodiacSignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZodiacSignFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZodiacSignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
