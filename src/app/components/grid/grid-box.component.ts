import { Component, Input} from '@angular/core';
import { Row } from '../../models/row';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-box',
  templateUrl: './grid.box.component.html',
  styleUrls: ['./grid-box.component.scss']
})
export class GridBoxComponent {
  @Input() gridSize: number;
  @Input() tableHeaders$: Observable<string[]>;
  @Input() tableRows$: Observable<Row[]>;
}

