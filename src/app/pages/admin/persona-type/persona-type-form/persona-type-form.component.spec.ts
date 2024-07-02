import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaTypeFormComponent } from './persona-type-form.component';

describe('PersonaTypeFormComponent', () => {
  let component: PersonaTypeFormComponent;
  let fixture: ComponentFixture<PersonaTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaTypeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
