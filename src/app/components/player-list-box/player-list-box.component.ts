import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayerInGameInfo} from '../../models/player-in-game-info';

@Component({
  selector: 'app-player-list-box',
  templateUrl: './player-list-box.component.html',
  styleUrls: ['./player-list-box.component.scss']
})
export class PlayerListBoxComponent implements OnInit {
  @Input() playersInGameInfos$: Observable<PlayerInGameInfo[]>;

  constructor() {
  }

  ngOnInit() {
  }
}
