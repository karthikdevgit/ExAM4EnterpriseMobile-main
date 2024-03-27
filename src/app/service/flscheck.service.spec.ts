import { TestBed } from '@angular/core/testing';

import { FlscheckService } from './flscheck.service';

describe('FlscheckService', () => {
  let service: FlscheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlscheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
