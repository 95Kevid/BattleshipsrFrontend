import {Observable} from 'rxjs';
import {Ship} from './ship';
import {Cell} from './cell';

export interface PlayerInfoEntry {
  name$: Observable<string>;
  playersToSunkShips$: Observable<Map<string, Ship>>;
  playersToShotPositions$: Observable<Map<string, Cell>>;
}
