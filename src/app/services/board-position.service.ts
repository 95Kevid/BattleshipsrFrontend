import { Injectable } from '@angular/core';
import {BoardPosition} from '../models/board-position';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class BoardPositionService {

  constructor() { }

  // extractBoardPositions(playersToShotBoardPositions: Map<string, BoardPosition>): BoardPosition[] {
  //   forEach(player: string)
  //   playersToShotBoardPositions.keys();
  //   return null;
  // }


}
