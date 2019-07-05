import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListBoxComponent } from './player-list-box.component';

describe('PlayerListBoxComponent', () => {
  let component: PlayerListBoxComponent;
  let fixture: ComponentFixture<PlayerListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
