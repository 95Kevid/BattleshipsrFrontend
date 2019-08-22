import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  winnerName$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.winnerName$ = this.store.select(state => state.gameState.winner.name);
  }
}
