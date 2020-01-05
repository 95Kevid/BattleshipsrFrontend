import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoserScreenComponent } from './loser-screen.component';

describe('LoserScreenComponent', () => {
  let component: LoserScreenComponent;
  let fixture: ComponentFixture<LoserScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoserScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
