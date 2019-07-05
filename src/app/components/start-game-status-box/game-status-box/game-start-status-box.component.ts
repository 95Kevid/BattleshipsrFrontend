import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-game-status-box',
  templateUrl: './game-start-status-box.component.html',
  styleUrls: ['./game-start-status-box.component.scss']
})
export class GameStartStatusBoxComponent {
  @Input() playersReady$: Observable<number>;
  @Input() playersInGame$: Observable<number>;
}
