import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTurnInfoBoxComponent } from './player-turn-info-box.component';

describe('PlayerTurnInfoBoxComponent', () => {
  let component: PlayerTurnInfoBoxComponent;
  let fixture: ComponentFixture<PlayerTurnInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTurnInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTurnInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
