import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './containers/start-screen/start-screen.component';
import { CreateGameBoxComponent } from './components/create-game-box/create-game-box.component';
import { CreatePlayerBoxComponent } from './components/create-player-box/create-player-box.component';
import { GameGridComponent } from './containers/grid/game-grid/game-grid.component';
import { ShipPositionComponent } from './containers/ship-placing/ship-position.component.';
import { GameStartStatusBoxComponent } from './components/start-game-status-box/game-status-box/game-start-status-box.component';
import { GridBoxComponent } from './components/grid/grid-box.component';
import { ShipPositionBoxComponent } from './components/ship-position-box/ship-position-box.component';
import { GameControlBoxComponent } from './components/start-game-status-box/game-control-box/game-control-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        AppComponent,
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
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = component;
    expect(app).toBeTruthy();
  });

  // it('should create a grid with width of board size of 10', () => {
  //   component.boardSize = 10;
  //
  //   fixture.detectChanges();
  //   const rows = fixture.debugElement.queryAll(By.css('.row')).length;
  //   expect(rows).toBe(10);
  //
  //   expect(component.boardSize).toBe(10);
  // });
});
