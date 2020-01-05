import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadGameBoxComponent } from './load-game-box.component';

describe('LoadGameBoxComponent', () => {
  let component: LoadGameBoxComponent;
  let fixture: ComponentFixture<LoadGameBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadGameBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadGameBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
