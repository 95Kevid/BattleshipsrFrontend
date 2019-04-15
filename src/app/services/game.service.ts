import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateGameRequest } from '../models/create-game-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private createGameUrl = 'http://localhost:9721/creategame/';

  constructor(private http: HttpClient) {}

  createGame(createGameRequest: CreateGameRequest): Observable<number> {
    const request = createGameRequest;
    return this.http.post<number>(
      this.createGameUrl + request.numberOfPlayers + '/' + request.gridSize,
      null
    );
  }
}
