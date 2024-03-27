import { TestBed } from '@angular/core/testing';

import { GlobalParamService } from './global-param.service';

describe('GlobalParamService', () => {
  let service: GlobalParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalParamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
