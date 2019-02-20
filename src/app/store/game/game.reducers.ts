import {GameActions} from './game.actions';

export interface GameState {
  playersInGame: number;
  playersReady: number;
  gameId?: number;
  playerId?: number;
  playerReady: boolean;
}

export const initialGameState: GameState = {
  playersInGame: 0,
  playersReady: 0,
  playerReady: false
};

export function gameReducers(state: GameState = initialGameState, action: GameActions) {
  switch (action.type) {
    case 'PLAYERS_TO_PLAYERS_READY_SUCCESS': {
      const newState: GameState = {...state};
      newState.playersInGame = action.payload.playersInGame;
      newState.playersReady = action.payload.playersReady;
      return newState;
    }
    case 'GAME_CREATED': {
      const newState: GameState = {...state};
      newState.gameId = action.payload;
      return newState;
    }
    case 'PLAYER_CREATED': {
      const newState: GameState = {...state};
      newState.playerId = action.payload;
      return newState;
    }
    case 'PLAYER_READY_SUCCESS': {
      const newState: GameState = {...state};
      newState.playerReady = true;
      return newState;
    }
    default: {
      return state;
    }
  }
}

