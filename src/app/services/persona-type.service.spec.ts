import { TestBed } from '@angular/core/testing';

import { PersonaTypeService } from './persona-type.service';

describe('PersonaTypeService', () => {
  let service: PersonaTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
