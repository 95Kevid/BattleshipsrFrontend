import * as gameReducers from './game.reducers';
import {initialGameState} from './game.reducers';
import {
  GameActions,
  GameCreatedAction,
  PlayerCreatedAction,
  PlayerReadySuccessAction,
  PlayersToPlayersReadyPollSuccessAction
} from './game.actions';

describe('Game reducers', () => {
  describe('Undefined action', () => {
    it('Should return the default state', () => {
      const undefinedAction: GameActions = {
        payload: 1,
        type: 'undefinedAction'
      };
      const state = gameReducers.gameReducers(undefined, undefinedAction);
      expect(state).toBe(initialGameState);

    });
  });

  describe('Game created action', () => {
    it('Should set the game id from the initial state to the payload value', () => {
      const state = {...initialGameState};
      state.gameId = 1;
      const gameCreatedAction = new GameCreatedAction(1);
      expect(state).toEqual(gameReducers.gameReducers(initialGameState, gameCreatedAction));
    });
  });

  describe('Player created action', () => {
    it('Should set the player id from the initial state to the payload value', () => {
      const state = {...initialGameState};
      state.playerId = 1;
      const playerCreatedAction = new PlayerCreatedAction(1);
      expect(state).toEqual(gameReducers.gameReducers(initialGameState, playerCreatedAction));
    });
  });

  describe('Players to players ready successful pole request', () => {
    it('Should set the players in game and players ready to the value in the payload', () => {
      const state = {...initialGameState};
      state.playersInGame = 4;
      state.playersReady = 3;
      const playersToPlayersReadyAction = new PlayersToPlayersReadyPollSuccessAction({playersInGame: 4, playersReady: 3});
      expect(state).toEqual(gameReducers.gameReducers(initialGameState, playersToPlayersReadyAction));
    });

    describe('Players ready to start successful request', () => {
      it('Should set that the player is ready to start', () => {
        const state = {...initialGameState};
        state.playerReady = true;
        const playerReadySuccessAction = new PlayerReadySuccessAction();
        expect(state).toEqual(gameReducers.gameReducers(initialGameState, playerReadySuccessAction));
      });
    });
  });
});
