import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoDisciplinasComponent } from './plano-disciplinas.component';

describe('PlanoDisciplinasComponent', () => {
  let component: PlanoDisciplinasComponent;
  let fixture: ComponentFixture<PlanoDisciplinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoDisciplinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
