import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable, zip} from 'rxjs';
import {GameStatusRequestAction, ShootRequestAction} from '../../store/game/game.actions';
import {ShootRequest} from '../../models/shoot-request';
import {PlayerInGameInfo} from '../../models/player-in-game-info';

@Component({
  selector: 'app-shooting-screen',
  templateUrl: './shooting-screen.component.html',
  styleUrls: ['./shooting-screen.component.scss']
})
export class ShootingScreenComponent implements OnInit {

  private store: Store<AppState>;
  private gameId: number;
  private gameId$: Observable<number>;
  private playerId: number;
  private playerId$: Observable<number>;
  private playersInGameInfos$: Observable<PlayerInGameInfo[]>;
  private disableShootingOption: boolean;
  private disableShootingOption$: Observable<boolean>;

  constructor(store: Store<AppState>) {
    this.store = store;
  }

  ngOnInit() {
    this.gameId$ = this.store.select(state => state.gameState.gameId);
    this.gameId$.subscribe(state => this.gameId = state);
    this.playerId$ = this.store.select(state => state.gameState.playerId);
    this.playerId$.subscribe(state => this.playerId = state);
    this.playersInGameInfos$ = this.store.select(state => state.gameState.playerInGameInfos);
    this.disableShootingOption$ = this.store.select((state => state.gameState.disableShootingOption));
    this.disableShootingOption$.subscribe(state => this.disableShootingOption = state);
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
