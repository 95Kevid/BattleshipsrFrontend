import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartScreenComponent} from '../containers/start-screen/start-screen.component';
import {ShootingScreenComponent} from '../containers/shooting-screen/shooting-screen.component';
import {EndScreenComponent} from '../containers/winner-screen/end-screen.component';
import {LoserScreenComponent} from '../containers/loser-screen/loser-screen.component';

const routes: Routes = [
  { path: 'start-game', component: StartScreenComponent },
  { path: 'shooting', component: ShootingScreenComponent },
  { path: 'winner-screen', component: EndScreenComponent},
  { path: 'loser-screen', component: LoserScreenComponent},
  { path: '**', component: StartScreenComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
