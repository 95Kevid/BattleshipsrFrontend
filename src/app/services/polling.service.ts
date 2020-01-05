import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameStatusResponse } from '../models/game-status-response';
import {GameStatusRequest} from '../models/game-status-request';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  constructor(private http: HttpClient) {}

  private playerToPlayerReadyUrl = 'http://localhost:9721/waitingplayerpoll';
  private gameStatusUrl = 'http://localhost:9721/gamestatuspoll';

  pollToStartGame(gameId: number): Observable<PlayersToPlayersReady> {
    return this.http.post<PlayersToPlayersReady>(this.playerToPlayerReadyUrl, gameId);
  }

  pollForGameStatus(gameStatusRequest: GameStatusRequest): Observable<GameStatusResponse> {
      return this.http.post<GameStatusResponse>(this.gameStatusUrl, gameStatusRequest.gameId);
  }
}
