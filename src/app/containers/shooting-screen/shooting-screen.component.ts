import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GameStatusRequestAction, ShootRequestAction, WinnerSaveAction} from '../../store/game/game.actions';
import {ShootRequest} from '../../models/shoot-request';
import {PlayerInGameInfo} from '../../models/player-in-game-info';
import {GameService} from '../../services/game.service';
import {NavigationService} from '../../services/navigation.service';
import {Player} from '../../models/player';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-shooting-screen',
  templateUrl: './shooting-screen.component.html',
  styleUrls: ['./shooting-screen.component.scss']
})
export class ShootingScreenComponent implements OnInit {
  private gameId: number;
  private gameId$: Observable<number>;
  private playerId: number;
  private playerId$: Observable<number>;
  private playersInGameInfos$: Observable<PlayerInGameInfo[]>;
  private playersInGame$: Observable<Player[]>;
  private disableShootingOption: boolean;
  private disableShootingOption$: Observable<boolean>;

  constructor(private store: Store<AppState>, private gameService: GameService, private navigationService: NavigationService,
              private playerService: PlayerService) {}

  ngOnInit() {
    this.gameId$ = this.store.select(state => state.gameState.gameId);
    this.gameId$.subscribe(state => this.gameId = state);
    this.playerId$ = this.store.select(state => state.gameState.playerId);
    this.playerId$.subscribe(state => this.playerId = state);
    this.playersInGameInfos$ = this.store.select(state => state.gameState.playerInGameInfos);
    this.disableShootingOption$ = this.store.select((state => state.gameState.disableShootingOption));
    this.disableShootingOption$.subscribe(state => this.disableShootingOption = state);
    this.playersInGame$ = this.store.select(state => state.gameState.playersInGame);
    this.playerService.getWinner(this.playersInGame$)
      .subscribe((winner => {
        if (winner) {
          console.log('Navigate to winner-screen');
          this.store.dispatch(new WinnerSaveAction());
          this.navigationService.navigate('/winner-screen');
        }
      }));
    this.playerService.isLoser(this.playerId, this.playersInGame$)
      .subscribe((isLoser => {
        if (isLoser) {
          console.log('Navigate to loser screen');
          this.navigationService.navigate('/loser-screen');
        }
      }));
  }

  shoot(shootRequest: ShootRequest) {
    shootRequest.gameId = this.gameId;
    shootRequest.playerId = this.playerId;
    this.store.dispatch(new ShootRequestAction(shootRequest));
  }

  pollForGameStatus() {
    this.store.dispatch(new GameStatusRequestAction({gameId: this.gameId, playerId: this.playerId}));
    console.log('Game Id is' + this.gameId);
  }
}
