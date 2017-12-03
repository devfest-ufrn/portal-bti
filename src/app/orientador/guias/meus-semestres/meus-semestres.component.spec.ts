import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusSemestresComponent } from './meus-semestres.component';

describe('MeusSemestresComponent', () => {
  let component: MeusSemestresComponent;
  let fixture: ComponentFixture<MeusSemestresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusSemestresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusSemestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
