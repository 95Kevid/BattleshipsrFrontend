import {BoardPosition} from './board-position';
import {Ship} from './ship';

export class  PlayerInGameInfo {
  playerId: number;
  name: string;
  shotPositions: BoardPosition[];
  sunkShips: Ship[];
  winner: boolean;
}
