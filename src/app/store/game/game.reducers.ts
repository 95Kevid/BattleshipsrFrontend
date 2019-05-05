import { GameActions } from './game.actions';

export interface GameState {
  playersInGame: number;
  playersReady: number;
  gameId?: number;
  playerId?: number;
  playerReady: boolean;
  currentOrders: string;
}

export const initialGameState: GameState = {
  playersInGame: 0,
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
      newState.playersInGame = action.payload.playersInGame;
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
    default: {
      return state;
    }
  }
}
