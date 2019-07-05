import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player-list-box',
  templateUrl: './player-list-box.component.html',
  styleUrls: ['./player-list-box.component.scss']
})
export class PlayerListBoxComponent implements OnInit {
  @Input() playerInfoList$: Observable<any>;

  constructor() {
  }

  ngOnInit() {
  }
}
