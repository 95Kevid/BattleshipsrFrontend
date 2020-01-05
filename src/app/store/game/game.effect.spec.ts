import {TestBed} from '@angular/core/testing';
import {GameEffects} from './game.effects';
import {GameService} from '../../services/game.service';
import {PollingService} from '../../services/polling.service';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {
  CreateGameRequestAction,
  CreatePlayerRequestAction,
  GameCreatedAction,
  PlayerCreatedAction,
  PlayersToPlayersReadyPollAction,
  PlayersToPlayersReadyPollSuccessAction
} from './game.actions';
import {hot} from 'jest-marbles';
import {PlayerService} from '../../services/player.service';

describe('Game effects', () => {
  let gameService: GameService;
  let actions$: Observable<any>;
  let gameEffects: GameEffects;
  let playerService: PlayerService;
  let pollingService: PollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [
        PlayerService,
        PollingService,
        GameService,
        GameEffects,
        provideMockActions(() => actions$)
      ]
    });

    gameService = TestBed.get(GameService);
    gameEffects = TestBed.get(GameEffects);
    playerService = TestBed.get(PlayerService);
    pollingService = TestBed.get(PollingService);
  });

  describe('Create game effect', () => {
    it('Create game request is successful', () => {
      jest.spyOn(gameService, 'createGame').mockImplementation(() => of(1));
      const action = new CreateGameRequestAction({
        numberOfPlayers: 2,
        gridSize: 4
      });
      const expectedAction = new GameCreatedAction(1);
      actions$ = hot('a', { a: action });
      const expectedActions$ = hot('b', { b: expectedAction });
      expect(gameEffects.createGameRequest$).toBeObservable(expectedActions$);
    });
  });

  describe('Create player effect', () => {
    it('Create player request is successful', () => {
      jest.spyOn(playerService, 'createPlayer').mockImplementation(() => of(1));
      const action = new CreatePlayerRequestAction({
        gameId: 1,
        playerName: 'Dan Bunker'
      });
      const expectedAction = new PlayerCreatedAction(1);
      actions$ = hot('a', { a: action });
      const expectedActions$ = hot('b', { b: expectedAction });
      expect(gameEffects.createPlayerRequest$).toBeObservable(expectedActions$);
    });
  });

  describe('Request player', () => {
    it('Players to players ready request is successful', () => {
      jest
        .spyOn(pollingService, 'pollToStartGame')
        .mockImplementation(() => of({ playersInGame: 4, playersReady: 3 }));
      const action = new PlayersToPlayersReadyPollAction(1);
      const expectedAction = new PlayersToPlayersReadyPollSuccessAction({
        playersInGame: 4,
        playersReady: 3
      });
      actions$ = hot('a', { a: action });
      const expectedActions$ = hot('b', { b: expectedAction });
      expect(gameEffects.requestPlayersToPlayersReady$).toBeObservable(
        expectedActions$
      );
    });
  });
});
