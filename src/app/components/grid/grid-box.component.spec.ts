import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GridBoxComponent} from './grid-box.component';
import {ShipPositionComponent} from '../../containers/ship-placing/ship-position.component.';



describe('GridBoxComponent', () => {
  let component: GridBoxComponent;
  let fixture: ComponentFixture<GridBoxComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBoxComponent,
        ShipPositionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loadGrid();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Number of rows should be equal to the grid size', () => {
    expect(component.tableRows.length).toBe(component.gridSize);
  });

  it('Number of table headers should be equal to the grid size plus 1', () => {
    expect(component.tableHeaders.length).toBe(component.gridSize + 1);
  });

  it('the number of cells in each row should be equal to the grid size', () => {
    expect(component.tableRows.filter(r => r.cells.length === component.gridSize).length === component.gridSize);
  });
});
