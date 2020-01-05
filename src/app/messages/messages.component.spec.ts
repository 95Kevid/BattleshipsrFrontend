import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengesComponent } from './messages.component';

describe('MessengesComponent', () => {
  let component: MessengesComponent;
  let fixture: ComponentFixture<MessengesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
