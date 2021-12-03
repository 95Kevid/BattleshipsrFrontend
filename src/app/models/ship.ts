import { BoardPosition } from './board-position';
import {ShipType} from './ship-type';

export class Ship {
  occupiedBoardPositions: BoardPosition[];
  type: ShipType;
  boardPosition: BoardPosition;
  orientation: string;
  length: number;
  isSunk: boolean;
}
