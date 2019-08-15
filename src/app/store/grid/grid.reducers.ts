import { Row } from '../../models/row';
import { BoardPosition } from '../../models/board-position';
import { GridActions } from './grid.actions';
import { GridParameters } from '../../models/gridParameters';

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
  action: GridActions
) {
  switch (action.type) {
    case 'INITIALISE_GRID': {
      const gridParameters = initialiseGrid(action.payload);
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

function initialiseGrid(gridSize: number): GridParameters {
  const gridParameters: GridParameters = new GridParameters();
  gridParameters.tableHeaders = [];
  gridParameters.tableRows = [];

  for (let i = 0; i < gridSize; i++) {
    gridParameters.tableHeaders[i] = String.fromCharCode(65 + i);
  }

  for (let i = 0; i < gridSize; i++) {
    const boardPositions: BoardPosition[] = [];
    for (let j = 0; j < gridSize; j++) {
      const cell: BoardPosition = {
        col: gridParameters.tableHeaders[j].toString(),
        row: i,
        colour: 'blue',
        hit: false,
        equals: c => {
          return c.col === cell.col && c.row === cell.row;
        }
      };
      boardPositions[j] = cell;
    }
    gridParameters.tableRows[i] = new Row(boardPositions);
  }
  return gridParameters;
}


