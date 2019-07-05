import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {PlayerService} from '../../services/player.service';
import {CreateGameRequest} from '../../models/create-game-request';
import {Store} from '@ngrx/store';
import {InitialiseGridAction} from '../../store/grid/grid.actions';
import {PollingService} from '../../services/polling.service';
import {
  CreateGameRequestAction,
  CreatePlayerRequestAction,
  JoinGameRequestAction,
  PlayerReadyRequestAction,
  PlayersToPlayersReadyPollAction,
  UpdateOrdersAction
} from '../../store/game/game.actions';
import {Observable} from 'rxjs';
import {AppState} from '../../store';
import {JoinGameRequest} from '../../models/join-game-request';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  private gameService: GameService;
  private createPlayerService: PlayerService;
  private navigationService: NavigationService;
  private store: Store<AppState>;
  private pollingService: PollingService;
  private playersReady$: Observable<number>;
  private playersInGame$: Observable<number>;
  private gameId$: Observable<number>;
  private gameId: number;
  private playerId$: Observable<number>;
  private orders$: Observable<string>;

  constructor(
    gameService: GameService,
    createPlayerService: PlayerService,
    store: Store<AppState>,
    pollingService: PollingService,
    navigationService: NavigationService
  ) {
    this.gameService = gameService;
    this.createPlayerService = createPlayerService;
    this.store = store;
    this.pollingService = pollingService;
    this.navigationService = navigationService;
  }

  showGameCreationMenu = false;
  showPlayerCreationMenu = false;
  showJoinGameMenu = false;
  showShipPlacerMenu = false;
  showGrid = false;

  ngOnInit() {
    this.gameId$ = this.store.select(state => state.gameState.gameId);
    this.playerId$ = this.store.select(state => state.gameState.playerId);
    this.playersInGame$ = this.store.select(
      state => state.gameState.numberOfPlayersInGame
    );
    this.playersReady$ = this.store.select(
      state => state.gameState.playersReady
    );
    this.orders$ = this.store.select(state => state.gameState.currentOrders);

    this.gameService.allPlayersReady()
      .subscribe((result: boolean) => {
        if (result) {
          this.navigationService.navigate('/shooting');
        }
      });
  }

  createGameButtonClicked() {
    this.showGameCreationMenu = true;
    this.store.dispatch(new UpdateOrdersAction('Enter number of players and the size of the game grid (6 - 26)'));
  }

  joinGameButtonClicked() {
    this.showJoinGameMenu = true;
  }

  createGame(createGameRequest: CreateGameRequest) {
    this.showPlayerCreationMenu = true;
    this.store.dispatch(new InitialiseGridAction(createGameRequest.gridSize));
    this.store.dispatch(new CreateGameRequestAction(createGameRequest));
    this.store.dispatch(new UpdateOrdersAction('Enter the your name.'));
    this.gameId$.subscribe(state => (this.gameId = state));
  }

  createPlayer(playerName: string) {
    this.store.dispatch(
      new CreatePlayerRequestAction({
        gameId: this.gameId,
        playerName: playerName
      })
    );
    this.showShipPlacerMenu = true;
    this.showGrid = true;
    this.store.dispatch(new UpdateOrdersAction('Place your ships and click start.'));
  }

  pollForPlayersToPlayersReady() {
    this.store.dispatch(new PlayersToPlayersReadyPollAction(this.gameId));
  }

  readyToStartGame() {
    let playerId: number;
    this.playerId$.subscribe(pid => (playerId = pid));
    this.store.dispatch(new PlayerReadyRequestAction(playerId));
    this.store.dispatch(new UpdateOrdersAction('Await other players to join...'));
  }

  joinGame(joinGameRequest: JoinGameRequest) {
    this.gameId$.subscribe(state => (this.gameId = state));
    this.store.dispatch(new JoinGameRequestAction(joinGameRequest));
    this.showShipPlacerMenu = true;
  }
}
