import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlayerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: []
    })
  );

  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
  });
});
