import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipPositionComponent } from './ship-position.component.';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ShipPositionBoxComponent } from '../../components/ship-position-box/ship-position-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store';

describe('ShipPositionComponent', () => {
  let component: ShipPositionComponent;
  let fixture: ComponentFixture<ShipPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [ShipPositionComponent, ShipPositionBoxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the title should be Ship Placing', () => {
    expect(component.title).toBe('Ship Placing');

    const debug: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(debug).not.toBeNull();
    // const native: HTMLElement = debug.nativeElement;
    // expect(native.textContent).toEqual('Hi');
  });
});
