import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-player-turn-info-box',
  templateUrl: './player-turn-info-box.component.html',
  styleUrls: ['./player-turn-info-box.component.scss']
})
export class PlayerTurnInfoBoxComponent implements OnInit {

  @Output() pollForGameStatusEvent$: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  pollForGameStatus() {
    this.pollForGameStatusEvent$.emit();
  }

}
