import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {JoinGameRequest} from '../../models/join-game-request';

@Component({
  selector: 'app-join-game-box',
  templateUrl: './join-game-box.component.html',
  styleUrls: ['./join-game-box.component.scss']
})
export class JoinGameBoxComponent implements OnInit {
  constructor() {}

  @Output() joinGameRequest$ = new EventEmitter();

  joinGameFormGroup: FormGroup = new FormGroup({
    playerName: new FormControl(),
    gameId: new FormControl()
  });

  ngOnInit() {}

  joinGameButtonClicked() {
    const joinGameRequest: JoinGameRequest = {
      playerName: this.joinGameFormGroup.controls['playerName'].value,
      gameId: this.joinGameFormGroup.controls['gameId'].value}
    this.joinGameRequest$.emit(joinGameRequest);
  }
}
