import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGridComponent } from './game-grid.component';
import {GridBoxComponent} from '../../../components/grid/grid-box.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../store';

describe('GameGridComponent', () => {
  let component: GameGridComponent;
  let fixture: ComponentFixture<GameGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        StoreModule.forRoot(reducers)],
      declarations: [ GameGridComponent,
      GridBoxComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
