import { TestBed } from '@angular/core/testing';

import { BoardPositionService } from './board-position.service';

describe('BoardPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardPositionService = TestBed.get(BoardPositionService);
    expect(service).toBeTruthy();
  });
});
