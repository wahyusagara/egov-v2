import { TestBed } from '@angular/core/testing';

import { GlobalFuncService } from './global-func.service';

describe('GlobalFuncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalFuncService = TestBed.get(GlobalFuncService);
    expect(service).toBeTruthy();
  });
});
