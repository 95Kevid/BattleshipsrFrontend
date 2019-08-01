import {Ship} from './ship';
import {BoardPosition} from './board-position';

export class GameStatusResponse {
  playersTurnId: number;
  playersToShotPositions: Map<string, BoardPosition>;
  playersToSunkShips: Map<string, Ship>;
}
