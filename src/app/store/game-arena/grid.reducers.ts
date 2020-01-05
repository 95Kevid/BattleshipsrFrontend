import { Row } from '../../models/row';
import { BoardPosition } from '../../models/board-position';
import { GameArenaActions } from './game-arena.actions';
import { GameArenaParameters } from '../../models/game-arena-parameters';

export interface GridState {
  tableRows: Row[];
  lengthOfRows: number;
  tableHeaders: string[];
  gridSize: number;
}

export const initialGridState: GridState = {
  tableRows: [],
  tableHeaders: [],
  lengthOfRows: 0,
  gridSize: 0
};

function renderShip(state: GridState, occupiedBoardPositions: BoardPosition[]) {
  const outputState = { ...state };
  for (const shipCell of occupiedBoardPositions) {
    outputState.tableRows[shipCell.row - 1].boardPositions[
      shipCell.col.charCodeAt(0) - 65
    ].colour = occupiedBoardPositions[0].colour;
  }
  return outputState;
}

export function gridReducers(
  state: GridState = initialGridState,
  action: GameArenaActions
) {
  switch (action.type) {
    case 'UPDATE_GAME_ARENA_PARAMETERS': {
      const gridParameters: GameArenaParameters = action.payload;
      return {
        ...state,
        ...gridParameters,
        lengthOfRows: gridParameters.tableRows.length
      };
    }
    case 'RENDER_SHIP': {
      return renderShip(state, action.payload.occupiedBoardPositions);
    }
    case 'RENDER_HIT_POSITION': {
      const newState: GridState = { ...state};
      newState.tableRows.map(row => row.boardPositions).map(boardPositions => {
        boardPositions.forEach(position => {
          action.payload.shotPositions.forEach(shotPosition => {
            if (shotPosition.row === position.row + 1
              && shotPosition.col === position.col) {
              position.colour = 'red';
            }
          });
        });
      })
      return newState;
    }
    default: {
      return state;
    }
  }
}
