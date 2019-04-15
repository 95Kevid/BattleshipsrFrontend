import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ShipPlacingService } from '../../services/ship-placing.service';
import {
  AddShipRequestAction,
  AddShipSuceededAction,
  ShipPlaceFailedAction
} from './ship.actions';
import { RenderShipAction } from '../grid/grid.actions';
import { of } from 'rxjs';

@Injectable()
export class ShipEffects {
  constructor(
    private actions$: Actions,
    private shipPlacingService: ShipPlacingService
  ) {}

  @Effect()
  public addShip$ = this.actions$.pipe(
    ofType<AddShipRequestAction>('CALL_ADD_SHIP'),
    map(action => action.payload),
    switchMap(payload =>
      this.shipPlacingService.placeShip(payload).pipe(
        mergeMap(ship => [
          new AddShipSuceededAction(ship),
          new RenderShipAction(ship)
        ]),
        catchError(error => {
          return of(new ShipPlaceFailedAction(error));
        })
      )
    )
  );
}
