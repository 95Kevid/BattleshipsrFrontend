import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGameBoxComponent } from './join-game-box.component';

describe('JoinGameBoxComponent', () => {
  let component: JoinGameBoxComponent;
  let fixture: ComponentFixture<JoinGameBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGameBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGameBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
