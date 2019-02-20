import {Component, OnInit} from '@angular/core';
import {ShipPlaceRequest} from '../../models/ship-place-request';
import {PlayerService} from '../../services/player.service';
import {GameService} from '../../services/game.service';
import {Store} from '@ngrx/store';
import {State} from '../../store/state';
import {
  AddBattleshipRequestAction,
  AddCarrierRequestAction,
  AddCruiserRequestAction,
  AddDestroyerRequestAction,
  AddSubmarineRequestAction
} from '../../store/ship/ship.actions';
import {Observable} from 'rxjs';
import {AppState} from '../../store';

@Component({
  selector: 'app-ship-placer',
  templateUrl: './ship-position.component..html',
  styleUrls: ['./ship-position.component..scss']
})
export class ShipPositionComponent implements OnInit {

  title: String = 'Ship Placing';
  playerService: PlayerService;
  gameService: GameService;
  store: Store<AppState>;
  tableHeaders$: Observable<string[]>;
  lengthOfRows$: Observable<number>;
  rowNumbers: number[];

  constructor(playerService: PlayerService, gameService: GameService, store: Store<AppState>) {
    this.playerService = playerService;
    this.gameService = gameService;
    this.store = store;
    this.tableHeaders$ = this.store.select(state => state.gridState.tableHeaders);
    this.lengthOfRows$ = this.store.select(state => state.gridState.lengthOfRows);
  }

  ngOnInit() {
    this.lengthOfRows$.subscribe(length => this.calculateAvailableRows(length));
  }

  placeSubmarine(shipPlaceRequest: ShipPlaceRequest) {
    this.store.select(state => state.gameState.gameId).subscribe(gameId => shipPlaceRequest.gameId = gameId);
    this.store.select(state => state.gameState.playerId).subscribe(playerId => shipPlaceRequest.playerId = playerId)
    this.store.dispatch(new AddSubmarineRequestAction(shipPlaceRequest));
  }

  placeDestroyer(shipPlaceRequest: ShipPlaceRequest) {
    this.store.select(state => state.gameState.gameId).subscribe(gameId => shipPlaceRequest.gameId = gameId);
    this.store.select(state => state.gameState.playerId).subscribe(playerId => shipPlaceRequest.playerId = playerId)
    this.store.dispatch(new AddDestroyerRequestAction(shipPlaceRequest));
  }

  placeCarrier(shipPlaceRequest: ShipPlaceRequest) {
    this.store.select(state => state.gameState.gameId).subscribe(gameId => shipPlaceRequest.gameId = gameId);
    this.store.select(state => state.gameState.playerId).subscribe(playerId => shipPlaceRequest.playerId = playerId)
    this.store.dispatch(new AddCarrierRequestAction(shipPlaceRequest));
  }

  placeCruiser(shipPlaceRequest: ShipPlaceRequest) {
    this.store.select(state => state.gameState.gameId).subscribe(gameId => shipPlaceRequest.gameId = gameId);
    this.store.select(state => state.gameState.playerId).subscribe(playerId => shipPlaceRequest.playerId = playerId)
    this.store.dispatch(new AddCruiserRequestAction(shipPlaceRequest));
  }

  placeBattleship(shipPlaceRequest: ShipPlaceRequest) {
    this.store.select(state => state.gameState.gameId).subscribe(gameId => shipPlaceRequest.gameId = gameId);
    this.store.select(state => state.gameState.playerId).subscribe(playerId => shipPlaceRequest.playerId = playerId)
    this.store.dispatch(new AddBattleshipRequestAction(shipPlaceRequest));
  }

  calculateAvailableRows(length: number) {
    const array: number[] = new Array(length);
    for (let i = 0; i < length; i++) {
      array[i] = i + 1;
    }

    this.rowNumbers = array;
    console.log('This is the array: ' + array);
  }
}
