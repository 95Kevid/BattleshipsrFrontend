import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss']
})
export class EndScreenComponent implements OnInit {

  winnerName: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {


  }


}
