import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { squareComponent } from './square.component';

describe('squareComponent', () => {
  let component: squareComponent;
  let fixture: ComponentFixture<squareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ squareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(squareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
