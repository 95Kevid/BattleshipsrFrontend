import { ShipState } from './ship/ship.reducers';
import { GridState } from './game-arena/grid.reducers';

export interface State {
  shipState: ShipState;
  gridState: GridState;
}
