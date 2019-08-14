export class BoardPosition {
  id?: number;
  col: string;
  row: number;
  hit: boolean;
  colour?: string;

  public equals(cell: BoardPosition) {
    return cell.col === this.col && cell.row === this.row;
  }
}
