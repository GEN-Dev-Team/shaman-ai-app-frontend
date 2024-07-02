import { TestBed } from '@angular/core/testing';

import { ZodiacSignService } from './zodiac-sign.service';

describe('ZodiacSignService', () => {
  let service: ZodiacSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZodiacSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
