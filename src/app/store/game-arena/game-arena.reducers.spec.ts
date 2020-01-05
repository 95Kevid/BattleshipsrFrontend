import {GameArenaActions, InitialiseGameArena} from './game-arena.actions';
import * as gridReducers from './grid.reducers';
import {GridState, initialGridState} from './grid.reducers';

describe('Grid reducers', () => {
  describe('Undefined action', () => {
    it('Should return the default state', () => {
      const undefinedAction: GameArenaActions = {
        payload: 12,
        type: 'undefinedAction'
      };
      const state: GridState = gridReducers.gridReducers(undefined, undefinedAction);
      expect(state).toBe(initialGridState);
    });
  });

  describe('Initialise game-arena action', () => {
    it('Number of rows should be equal to the game-arena size provided', () => {
      const initialiseGridAction: InitialiseGameArena = {
        payload: 15,
        type: 'INITIALISE_GRID'
      };
      const state: GridState = gridReducers.gridReducers(undefined, initialiseGridAction);
      expect(state.tableRows.length).toBe(initialiseGridAction.payload);
    });

    it('Number of table headers should be equal to the game-arena size', () => {
      const initialiseGridAction: InitialiseGameArena = {
        payload: 15,
        type: 'INITIALISE_GRID'
      };
      const state: GridState = gridReducers.gridReducers(undefined, initialiseGridAction);
      expect(state.tableHeaders.length).toBe(initialiseGridAction.payload);
    });

    it('the number of boardPositions in each row should be equal to the game-arena size', () => {
      const initialiseGridAction: InitialiseGameArena = {
        payload: 15,
        type: 'INITIALISE_GRID'
      };
      const state: GridState = gridReducers.gridReducers(undefined, initialiseGridAction);
      expect(
        state.tableRows.filter(r => r.boardPositions.length === state.gridSize)
          .length === state.gridSize
      );
    });
  });
});
