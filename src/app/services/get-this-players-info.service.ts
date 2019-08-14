import { Injectable } from '@angular/core';
import {PlayerInGameInfo} from '../models/player-in-game-info';

@Injectable({
  providedIn: 'root'
})
export class GetThisPlayersInfoService {
  getPlayerInfo(thisPlayerId: number, playerInGameInfos: PlayerInGameInfo[]): PlayerInGameInfo {
    return playerInGameInfos.filter(playerInfo => playerInfo.playerId === thisPlayerId).values().next().value;
  }
}
