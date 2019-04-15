import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridBoxComponent } from './grid-box.component';
import { ShipPositionComponent } from '../../containers/ship-placing/ship-position.component.';

describe('GridBoxComponent', () => {
  let component: GridBoxComponent;
  let fixture: ComponentFixture<GridBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridBoxComponent, ShipPositionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
