import { BoardPosition } from './board-position';

export class Row {
  cells: BoardPosition[];

  constructor(cells: BoardPosition[]) {
    this.cells = cells;
  }
}
