import {PlayerInGameInfo} from './player-in-game-info';


export class GameStatusResponse {
  playerInGameInfos: PlayerInGameInfo[];
  playersTurnId: number;
  thisPlayersId?: number;
}
