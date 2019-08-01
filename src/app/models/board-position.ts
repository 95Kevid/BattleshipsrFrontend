export class BoardPosition {
  col: string;
  row: number;
  colour: string;
  hit: boolean;

  public equals(cell: BoardPosition) {
    return cell.col === this.col && cell.row === this.row;
  }
}
