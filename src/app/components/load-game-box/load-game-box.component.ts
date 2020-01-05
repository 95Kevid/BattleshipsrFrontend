import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoadGameRequest} from '../../models/LoadGameRequest';

@Component({
  selector: 'app-load-game-box',
  templateUrl: './load-game-box.component.html',
  styleUrls: ['./load-game-box.component.scss']
})
export class LoadGameBoxComponent implements OnInit {
  constructor() {}

  @Output() loadGameRequest$ = new EventEmitter();

  loadGameFormGroup: FormGroup = new FormGroup({
    playerId: new FormControl(),
    gameId: new FormControl()
  });

  ngOnInit() {}

  loadGameButtonClicked() {
    const loadGameRequest: LoadGameRequest = {
      playerId: this.loadGameFormGroup.controls['playerId'].value,
      gameId: this.loadGameFormGroup.controls['gameId'].value}
    this.loadGameRequest$.emit(loadGameRequest);
  }
}
