import { BoardPosition } from './board-position';

export class Row {
  boardPositions: BoardPosition[];

  constructor(cells: BoardPosition[]) {
    this.boardPositions = cells;
  }
}
