import { GameActions } from './game.actions';
import {Player} from '../../models/player';
import {PlayerInGameInfo} from '../../models/player-in-game-info';

export interface GameState {
  numberOfPlayersInGame: number;
  playersTurnId?: number;
  playerInGameInfos?: PlayerInGameInfo[];
  playersInGame?: Player[];
  playersReady: number;
  gameId?: number;
  playerId?: number;
  playerReady: boolean;
  currentOrders: string;
  disableShootingOption: boolean;
  winner?: Player;
}

export const initialGameState: GameState = {
  numberOfPlayersInGame: 0,
  playersReady: 0,
  playerReady: false,
  currentOrders:
    'Create or join a game.',
  disableShootingOption: false,
  playersInGame: [],
  playerInGameInfos: []
};

export function gameReducers(
  state: GameState = initialGameState,
  action: GameActions
) {
  switch (action.type) {
    case 'PLAYERS_TO_PLAYERS_READY_SUCCESS': {
      const newState: GameState = { ...state };
      newState.numberOfPlayersInGame = action.payload.playersInGame;
      newState.playersReady = action.payload.playersReady;
      return newState;
    }
    case 'GAME_CREATED': {
      const newState: GameState = { ...state };
      newState.gameId = action.payload;
      return newState;
    }
    case 'JOIN_GAME': {
      const newState: GameState = { ...state };
      newState.playerId = action.payload.playerId;
      newState.gameId = action.payload.gameId;
      return newState;
    }
    case 'PLAYER_CREATED': {
      const newState: GameState = { ...state };
      newState.playerId = action.payload;
      return newState;
    }
    case 'PLAYER_READY_SUCCESS': {
      const newState: GameState = { ...state };
      newState.playerReady = true;
      return newState;
    }
    case 'UPDATE_ORDERS': {
      const newState: GameState = { ...state};
      newState.currentOrders = action.payload;
      return newState;
    }
    case 'GAME_STATUS_REQUEST_SUCCESS': {
      const newState: GameState = { ...state};
      console.log(action.payload);
      action.payload.playerInGameInfos.forEach(playerInfo => {
          newState.playersInGame[playerInfo.playerId] =  ({
            'id': playerInfo.playerId,
            'name': playerInfo.name,
            'winner': playerInfo.winner});
        })
      newState.playersTurnId = action.payload.playersTurnId;
      newState.playerInGameInfos = action.payload.playerInGameInfos;
      return newState;
    }
    case 'SHOOT_REQUEST_FAIL': {
      const newState: GameState = { ...state};
      newState.currentOrders = action.payload;
      return newState;
    }
    case 'SHOOT_REQUEST_SUCCESS': {
      const newState: GameState = {...state};
      newState.currentOrders = 'Shot taken. Awaiting other players.';
      newState.disableShootingOption = true;
      return newState;
    }
    case 'WINNER_SAVE':  {
      const newState: GameState = {...state};
      newState.winner = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
}
