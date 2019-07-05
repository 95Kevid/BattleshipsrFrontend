import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingScreenComponent } from './shooting-screen.component';

describe('ShootingScreenComponent', () => {
  let component: ShootingScreenComponent;
  let fixture: ComponentFixture<ShootingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
