import { TestBed } from '@angular/core/testing';

import { ForceApiService } from './force-api.service';

describe('ForceApiService', () => {
  let service: ForceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
