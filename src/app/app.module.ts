import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';

import { GridBoxComponent } from './components/grid/grid-box.component';
import { ShipPositionComponent } from './containers/ship-placing/ship-position.component.';
import { HttpClientModule } from '@angular/common/http';
import { ShipPositionBoxComponent } from './components/ship-position-box/ship-position-box.component';
import { CreateGameBoxComponent } from './components/create-game-box/create-game-box.component';
import { GameControlComponent } from './containers/game-control/game-control.component';
import { CreatePlayerBoxComponent } from './components/create-player-box/create-player-box.component';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ShipEffects } from './store/ship/ship.effects';
import { GameStartStatusBoxComponent } from './components/start-game-status-box/game-status-box/game-start-status-box.component';
import { GameGridComponent } from './containers/grid/game-grid/game-grid.component';
import { GameEffects } from './store/game/game.effects';
import { GameControlBoxComponent } from './components/start-game-status-box/game-control-box/game-control-box.component';
import { CurrentOrderBoxComponent } from './components/current-order-box/current-order-box.component';
import { JoinGameBoxComponent } from './components/join-game-box/join-game-box.component';
import { ShootingScreenComponent } from './containers/shooting-screen/shooting-screen.component';
import {AppRoutingModule} from './app-routing/app-routing-module';
import { PlayerListBoxComponent } from './components/player-list-box/player-list-box.component';
import { PlayerTurnInfoBoxComponent } from './components/in-game-status-box/player-turn-info-box.component';
import { ShootingBoxComponent } from './components/shooting-box/shooting-box.component';
import { EndScreenComponent } from './containers/winner-screen/end-screen.component';
import { FinishScreenComponent } from './containers/finish-screen/finish-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBoxComponent,
    ShipPositionComponent,
    ShipPositionBoxComponent,
    CreateGameBoxComponent,
    GameControlComponent,
    CreatePlayerBoxComponent,
    GameStartStatusBoxComponent,
    GameGridComponent,
    GameControlBoxComponent,
    CurrentOrderBoxComponent,
    JoinGameBoxComponent,
    ShootingScreenComponent,
    PlayerListBoxComponent,
    PlayerTurnInfoBoxComponent,
    ShootingBoxComponent,
    EndScreenComponent,
    FinishScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ShipEffects, GameEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
