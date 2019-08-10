import { TestBed } from '@angular/core/testing';

import { FireadbService } from './fireadb.service';

describe('FireadbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireadbService = TestBed.get(FireadbService);
    expect(service).toBeTruthy();
  });
});
