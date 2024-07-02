import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaTypeComponent } from './persona-type.component';

describe('PersonaTypeComponent', () => {
  let component: PersonaTypeComponent;
  let fixture: ComponentFixture<PersonaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
