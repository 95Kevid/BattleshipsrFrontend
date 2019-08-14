import { Action } from '@ngrx/store';
import { Ship } from '../../models/ship';
import {PlayerInGameInfo} from '../../models/player-in-game-info';

export class InitialiseGridAction implements Action {
  constructor(public payload: number) {}

  readonly type = 'INITIALISE_GRID';
}

export class RenderShipAction implements Action {
  constructor(public payload: Ship) {}
  readonly type = 'RENDER_SHIP';
}

export class RenderHitPosition implements Action {
  constructor(public payload: PlayerInGameInfo) {}
  readonly type = 'RENDER_HIT_POSITION';
}

export type GridActions = InitialiseGridAction | RenderShipAction | RenderHitPosition;
