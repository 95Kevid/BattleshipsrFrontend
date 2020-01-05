import { BoardPosition } from './board-position';
import {ShipType} from './ship-type';

export class Ship {
  occupiedBoardPositions: BoardPosition[];
  type: ShipType;
  orient: string;
  length: number;
  isSunk: boolean;
}
