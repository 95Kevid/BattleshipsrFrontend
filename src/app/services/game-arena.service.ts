
import { BoardPosition } from '../models/board-position';
import { Row } from '../models/row';
import { Injectable } from '@angular/core';
import { GameArenaParameters } from '../models/game-arena-parameters';

@Injectable({
  providedIn: 'root'
})
export class GameArenaService {
   initialiseGameArena(gridSize: number): GameArenaParameters {
    const gameArenaParameters: GameArenaParameters = new GameArenaParameters();
    gameArenaParameters.tableHeaders = [];
    gameArenaParameters.tableRows = [];

    for (let i = 0; i < gridSize; i++) {
      gameArenaParameters.tableHeaders[i] = String.fromCharCode(65 + i);
    }

    for (let i = 0; i < gridSize; i++) {
      const boardPositions: BoardPosition[] = [];
      for (let j = 0; j < gridSize; j++) {
        const cell: BoardPosition = {
          col: gameArenaParameters.tableHeaders[j].toString(),
          row: i,
          colour: 'blue',
          hit: false,
          equals: c => {
            return c.col === cell.col && c.row === cell.row;
          }
        };
        boardPositions[j] = cell;
      }
      gameArenaParameters.tableRows[i] = new Row(boardPositions);
    }
    return gameArenaParameters;
  }
}
