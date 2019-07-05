import { GameActions } from './game.actions';
import {Ship} from '../../models/ship';
import {Position} from '@angular/compiler';
import {Cell} from '../../models/cell';

export interface GameState {
  numberOfPlayersInGame: number;
  playersTurnId?: number;
  playersToSunkShips?: Map<string, Ship>;
  playersToShotPositions?: Map<string, Cell>;
  playersInGame?: string[];
  playersReady: number;
  gameId?: number;
  playerId?: number;
  playerReady: boolean;
  currentOrders: string;
}

export const initialGameState: GameState = {
  numberOfPlayersInGame: 0,
  playersReady: 0,
  playerReady: false,
  currentOrders:
    'Create or join a game.'
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
      newState.playersInGame = Array.from(Object.keys(action.payload.playersToSunkShips));
      newState.playersToSunkShips = action.payload.playersToSunkShips;
      newState.playersToShotPositions = action.payload.playersToShotPositions;
      newState.playersTurnId =  action.payload.playersTurnId;
      return newState;
    }
    default: {
      return state;
    }
  }
}
