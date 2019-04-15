import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreatePlayerRequest } from '../models/create-player-request';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:9721/addplayer';
  private playerReadyUrl = 'http://localhost:9721/readytostart/';

  createPlayer(createPlayerRequest: CreatePlayerRequest): Observable<number> {
    return this.http.post<number>(this.url, {
      gameId: createPlayerRequest.gameId,
      playerName: createPlayerRequest.playerName
    });
  }

  playerReady(playerId: number) {
    return this.http.post<number>(this.playerReadyUrl + playerId, null);
  }
}
