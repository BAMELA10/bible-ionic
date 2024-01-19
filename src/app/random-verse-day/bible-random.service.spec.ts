import { TestBed } from '@angular/core/testing';

import { BibleRandomService } from './bible-random.service';

describe('BibleRandomService', () => {
  let service: BibleRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
