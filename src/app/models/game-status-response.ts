import {Ship} from './ship';
import {Cell} from './cell';

export class GameStatusResponse {
  playersTurnId: number;
  playersToShotPositions: Map<string, Cell>;
  playersToSunkShips: Map<string, Ship>;
}
