import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStartStatusBoxComponent } from './game-start-status-box.component';

describe('GameStartStatusBoxComponent', () => {
  let component: GameStartStatusBoxComponent;
  let fixture: ComponentFixture<GameStartStatusBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameStartStatusBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStartStatusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
