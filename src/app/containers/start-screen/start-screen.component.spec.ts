import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartScreenComponent } from './start-screen.component';
import { GameControlBoxComponent } from '../../components/start-game-status-box/game-control-box/game-control-box.component';
import { CreateGameBoxComponent } from '../../components/create-game-box/create-game-box.component';
import { CreatePlayerBoxComponent } from '../../components/create-player-box/create-player-box.component';
import { GameGridComponent } from '../grid/game-grid/game-grid.component';
import { ShipPositionComponent } from '../ship-placing/ship-position.component.';
import { GameStartStatusBoxComponent } from '../../components/start-game-status-box/game-status-box/game-start-status-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridBoxComponent } from '../../components/grid/grid-box.component';
import { ShipPositionBoxComponent } from '../../components/ship-position-box/ship-position-box.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('StartScreenComponent', () => {
  let component: StartScreenComponent;
  let fixture: ComponentFixture<StartScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        StartScreenComponent,
        GameControlBoxComponent,
        CreateGameBoxComponent,
        CreatePlayerBoxComponent,
        GameGridComponent,
        ShipPositionComponent,
        GameStartStatusBoxComponent,
        GameGridComponent,
        GridBoxComponent,
        ShipPositionBoxComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
