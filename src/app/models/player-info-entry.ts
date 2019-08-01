import {Observable} from 'rxjs';
import {Ship} from './ship';
import {BoardPosition} from './board-position';

export interface PlayerInfoEntry {
  name$: Observable<string>;
  playersToSunkShips$: Observable<Map<string, Ship>>;
  playersToShotPositions$: Observable<Map<string, BoardPosition>>;
}
