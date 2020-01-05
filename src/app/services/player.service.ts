import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { CreatePlayerRequest } from '../models/create-player-request';
import {Player} from '../models/player';
import {filter, first, flatMap, map, take, tap} from 'rxjs/operators';

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

  getWinner(playerInfos$: Observable<Player[]>): Observable<Player> {
    return playerInfos$.pipe(
      flatMap(player => player),
      filter(player => player !== undefined),
      filter(player => player.winner),
      tap(player => console.log(player)));
  }

  isLoser(playerId: number, playersInfos$: Observable<Player[]>): Observable<Player> {
    return playersInfos$.pipe(
      flatMap(player => player),
      filter(player => player !== undefined),
      filter(player => player.id === playerId
                && player.loser));
  }
}
