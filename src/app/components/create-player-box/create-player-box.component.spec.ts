import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatePlayerBoxComponent} from './create-player-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CreatePlayerBoxComponent', () => {
  let component: CreatePlayerBoxComponent;
  let fixture: ComponentFixture<CreatePlayerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [CreatePlayerBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlayerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
