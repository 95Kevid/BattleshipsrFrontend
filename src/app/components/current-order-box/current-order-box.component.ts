import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-order-box',
  templateUrl: './current-order-box.component.html',
  styleUrls: ['./current-order-box.component.scss']
})
export class CurrentOrderBoxComponent implements OnInit {
  constructor() {}

  @Input() orders$: Observable<string>;
  ngOnInit() {}
}
