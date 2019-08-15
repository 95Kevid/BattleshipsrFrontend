import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GameStatusRequestAction, ShootRequestAction, WinnerFoundNavigateAction, WinnerSaveAction} from '../../store/game/game.actions';
import {ShootRequest} from '../../models/shoot-request';
import {PlayerInGameInfo} from '../../models/player-in-game-info';
import {GameService} from '../../services/game.service';
import {NavigationService} from '../../services/navigation.service';
import {Player} from '../../models/player';

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
  private disableShootingOption: boolean;
  private disableShootingOption$: Observable<boolean>;

  constructor(private store: Store<AppState>, private gameService: GameService, private navigationService: NavigationService) {}

  ngOnInit() {
    this.gameId$ = this.store.select(state => state.gameState.gameId);
    this.gameId$.subscribe(state => this.gameId = state);
    this.playerId$ = this.store.select(state => state.gameState.playerId);
    this.playerId$.subscribe(state => this.playerId = state);
    this.playersInGameInfos$ = this.store.select(state => state.gameState.playerInGameInfos);
    this.disableShootingOption$ = this.store.select((state => state.gameState.disableShootingOption));
    this.disableShootingOption$.subscribe(state => this.disableShootingOption = state);
    this.gameService.checkForWinner()
      .subscribe((player: Player) => {
        if (player) {
          this.store.dispatch(new WinnerFoundNavigateAction(player));
        }
      });
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
