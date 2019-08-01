import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ShootRequest} from '../../models/shoot-request';

@Component({
  selector: 'app-shooting-box',
  templateUrl: './shooting-box.component.html',
  styleUrls: ['./shooting-box.component.scss']
})
export class ShootingBoxComponent implements OnInit {

  @Output()
  shootRequestEvent$ = new EventEmitter<ShootRequest>();
  constructor() {
  }

  formGroup: FormGroup = new FormGroup({
    col: new FormControl(''),
    row: new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit() {
    const col: string = this.formGroup.controls['col'].value;
    const row: number = this.formGroup.controls['row'].value;
    this.shootRequestEvent$.emit({
    boardPosition: { col: col,
                     row: row}
    });
  }
}
