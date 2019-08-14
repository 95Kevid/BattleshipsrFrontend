import { Action } from '@ngrx/store';
import { CreateGameRequest } from '../../models/create-game-request';
import { CreatePlayerRequest } from '../../models/create-player-request';
import {JoinGameRequest} from '../../models/join-game-request';
import {JoinGameResponse} from '../../models/join-game-response';
import {GameStatusResponse} from '../../models/game-status-response';
import {ShootRequest} from '../../models/shoot-request';
import {GameStatusRequest} from '../../models/game-status-request';

export class PlayersToPlayersReadyPollAction implements Action {
  constructor(public payload: number) {}
  readonly type = 'PLAYERS_TO_PLAYERS_READY_REQUEST';
}

export class GameStatusRequestAction implements Action {
  constructor(public payload: GameStatusRequest) {}
  readonly type = 'GAME_STATUS_REQUEST';
}

export class GameStatusRequestSuccessAction implements Action {
  constructor(public payload: GameStatusResponse) {}
  readonly type = 'GAME_STATUS_REQUEST_SUCCESS';
}

export class PlayersToPlayersReadyPollSuccessAction implements Action {
  constructor(public payload: PlayersToPlayersReady) {}
  readonly type = 'PLAYERS_TO_PLAYERS_READY_SUCCESS';
}

export class CreateGameRequestAction implements Action {
  constructor(public payload: CreateGameRequest) {}
  readonly type = 'CREATE_GAME';
}

export class GameCreatedAction implements Action {
  constructor(public payload: number) {}
  readonly type = 'GAME_CREATED';
}

export class JoinGameRequestAction implements Action {
  constructor(public payload: JoinGameRequest) {}
  readonly type = 'JOIN_GAME_REQUEST';
}

export class JoinGameAction implements Action {
  constructor(public payload: JoinGameResponse) {}
  readonly type = 'JOIN_GAME';
}
export class PlayerCreatedAction implements Action {
  constructor(public payload: number) {}
  readonly type = 'PLAYER_CREATED';
}

export class CreatePlayerRequestAction implements Action {
  constructor(public payload: CreatePlayerRequest) {}
  readonly type = 'CREATE_PLAYER';
}

export class PlayerReadyRequestAction implements Action {
  constructor(public payload: number) {}
  readonly type = 'PLAYER_READY';
}

export class PlayerReadySuccessAction implements Action {
  readonly type = 'PLAYER_READY_SUCCESS';
}

export class PlayerReadyRequestFailAction implements Action {
  constructor(public payload: string) {}
  readonly type = 'PLAYER_READY_REQUEST_FAILED';
}

export class UpdateOrdersAction implements Action {
  constructor(public payload: string) {}
  readonly type = 'UPDATE_ORDERS';
}

export class ShootRequestAction implements Action {
  constructor(public payload: ShootRequest) {}
  readonly type = 'SHOOT_REQUEST';
}

export class ShootRequestFailAction implements Action {
  constructor(public payload: string) {}
  readonly type = 'SHOOT_REQUEST_FAIL';
}

export class ShootRequestSuccessAction implements Action {
  readonly type = 'SHOOT_REQUEST_SUCCESS';
}

export type GameActions =
  | CreateGameRequestAction
  | GameCreatedAction
  | PlayersToPlayersReadyPollAction
  | PlayersToPlayersReadyPollSuccessAction
  | CreatePlayerRequestAction
  | PlayerCreatedAction
  | PlayerReadyRequestAction
  | PlayerReadySuccessAction
  | PlayerReadyRequestFailAction
  | UpdateOrdersAction
  | JoinGameAction
  | GameStatusRequestSuccessAction
  | ShootRequestAction
  | ShootRequestFailAction
  | ShootRequestSuccessAction;
