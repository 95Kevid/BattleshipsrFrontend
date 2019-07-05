import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateGameRequest } from '../models/create-game-request';
import { Observable } from 'rxjs';
import { JoinGameResponse } from '../models/join-game-response';
import { JoinGameRequest } from '../models/join-game-request';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private createGameUrl = 'http://localhost:9721/creategame/';
  private joinGameUrl = 'http://localhost:9721/joingame/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  createGame(createGameRequest: CreateGameRequest): Observable<number> {
    return this.http.post<number>(
      this.createGameUrl +
        createGameRequest.numberOfPlayers +
        '/' +
        createGameRequest.gridSize,
      null
    );
  }

  joinGame(joinGameRequest: JoinGameRequest): Observable<JoinGameResponse> {
    const response = this.http.post<JoinGameResponse>(this.joinGameUrl, joinGameRequest);
    console.log(response);
    return response;
  }

  allPlayersReady(): Observable<boolean> {
    return this.store.pipe(
      map(state => state.gameState.numberOfPlayersInGame === state.gameState.playersReady && state.gameState.numberOfPlayersInGame !== 0)
    );
  }
}
