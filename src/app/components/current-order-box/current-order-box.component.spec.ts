import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrderBoxComponent } from './current-order-box.component';

describe('CurrentOrderBoxComponent', () => {
  let component: CurrentOrderBoxComponent;
  let fixture: ComponentFixture<CurrentOrderBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOrderBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrderBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
