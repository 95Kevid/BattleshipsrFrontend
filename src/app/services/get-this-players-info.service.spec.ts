import { TestBed } from '@angular/core/testing';

import { GetThisPlayersInfoService } from './get-this-players-info.service';

describe('GetThisPlayersInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetThisPlayersInfoService = TestBed.get(GetThisPlayersInfoService);
    expect(service).toBeTruthy();
  });
});
