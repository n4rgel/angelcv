import { TestBed } from '@angular/core/testing';

import { AllringService } from './allring.service';

describe('AllringService', () => {
  let service: AllringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
