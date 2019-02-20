import {Action} from '@ngrx/store';
import {CreateGameRequest} from '../../models/create-game-request';
import {CreatePlayerRequest} from '../../models/create-player-request';

export class PlayersToPlayersReadyPollAction implements Action {
  constructor(public payload: number) {}
  readonly type = 'PLAYERS_TO_PLAYERS_READY_REQUEST';
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

export type GameActions = CreateGameRequestAction | GameCreatedAction | PlayersToPlayersReadyPollAction
  | PlayersToPlayersReadyPollSuccessAction | CreatePlayerRequestAction | PlayerCreatedAction | PlayerReadyRequestAction
  | PlayerReadySuccessAction | PlayerReadyRequestFailAction;
