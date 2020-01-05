import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { GameArenaService } from '../../services/game-arena.service';
import { GameArenaParameterUpdate, InitialiseGameArena } from './game-arena.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class GameArenaEffects {

  constructor(
     private gameArenaService: GameArenaService,
     private actions$: Actions
  ) {}

  @Effect()
  public initialiseGameArena = this.actions$.pipe(
    ofType<InitialiseGameArena>('INITIALISE_GAME_ARENA'),
    map(action => {
      const gameArenaParameters = this.gameArenaService.initialiseGameArena(action.payload);
      return new GameArenaParameterUpdate(gameArenaParameters);
    })
  );
}
