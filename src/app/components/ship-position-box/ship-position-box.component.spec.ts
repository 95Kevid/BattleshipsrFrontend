import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPositionBoxComponent } from './ship-position-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ShipPositionBoxComponent', () => {
  let component: ShipPositionBoxComponent;
  let fixture: ComponentFixture<ShipPositionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ShipPositionBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipPositionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
