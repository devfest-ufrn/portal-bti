import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdiscenteComponent } from './pdiscente.component';

describe('PdiscenteComponent', () => {
  let component: PdiscenteComponent;
  let fixture: ComponentFixture<PdiscenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdiscenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdiscenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
