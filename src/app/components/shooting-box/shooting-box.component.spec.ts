import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingBoxComponent } from './shooting-box.component';

describe('ShootingBoxComponent', () => {
  let component: ShootingBoxComponent;
  let fixture: ComponentFixture<ShootingBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootingBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
