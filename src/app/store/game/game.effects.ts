import {Injectable} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {
  CreateGameRequestAction, CreatePlayerRequestAction,
  GameCreatedAction, PlayerCreatedAction, PlayerReadyRequestAction, PlayerReadyRequestFailAction, PlayerReadySuccessAction,
  PlayersToPlayersReadyPollAction,
  PlayersToPlayersReadyPollSuccessAction
} from './game.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {PollingService} from '../../services/polling.service';
import {PlayerService} from '../../services/player.service';
import {of} from 'rxjs';


@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private gameService: GameService, private pollingService: PollingService, private playerService: PlayerService) {}

 @Effect()
 public requestPlayersToPlayersReady$ = this.actions$.pipe(
   ofType<PlayersToPlayersReadyPollAction>('PLAYERS_TO_PLAYERS_READY_REQUEST'),
   switchMap(action => this.pollingService.pollToStartGame(action.payload)),
   map(playersToPlayersReady => new PlayersToPlayersReadyPollSuccessAction(playersToPlayersReady))
 )

 @Effect()
 public createGameRequest$ = this.actions$.pipe(
   ofType<CreateGameRequestAction>('CREATE_GAME'),
   map(action => action.payload),
   switchMap(createGameRequest => this.gameService.createGame(createGameRequest)),
   map(gameId => new GameCreatedAction(gameId)));

  @Effect()
  public createPlayerRequest$ =  this.actions$.pipe(
    ofType<CreatePlayerRequestAction>('CREATE_PLAYER'),
    map(action => action.payload),
    switchMap(createPlayerRequest => this.playerService.createPlayer(createPlayerRequest)),
    map(playerId => new PlayerCreatedAction(playerId)));

  @Effect()
  public readyToGameRequest$ = this.actions$.pipe(
    ofType<PlayerReadyRequestAction>('PLAYER_READY'),
    map(action => {
      console.log('readyToGame effect called');
      return action.payload;
    }),
    switchMap(playerId => this.playerService.playerReady(playerId)),
    map(_ => new PlayerReadySuccessAction()),
    catchError(err => of(new PlayerReadyRequestFailAction(err.toString()))),
    );
}



