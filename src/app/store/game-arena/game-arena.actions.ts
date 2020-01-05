import { Action } from '@ngrx/store';
import { Ship } from '../../models/ship';
import {PlayerInGameInfo} from '../../models/player-in-game-info';
import { GameArenaParameters } from '../../models/game-arena-parameters';

export class GameArenaParameterUpdate implements Action {
  constructor(public payload: GameArenaParameters) {}

  readonly type = 'UPDATE_GAME_ARENA_PARAMETERS';
}

export class RenderShipAction implements Action {
  constructor(public payload: Ship) {}
  readonly type = 'RENDER_SHIP';
}

export class InitialiseGameArena implements Action {
  constructor(public payload: number) {}
  readonly type = 'INITIALISE_GAME_ARENA';
}
export class RenderHitPosition implements Action {
    constructor(public payload: PlayerInGameInfo) {}
  readonly type = 'RENDER_HIT_POSITION';
}

export type GameArenaActions =  RenderShipAction | RenderHitPosition | GameArenaParameterUpdate | InitialiseGameArena;
