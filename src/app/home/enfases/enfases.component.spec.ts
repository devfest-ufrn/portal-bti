import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfasesComponent } from './enfases.component';

describe('EnfasesComponent', () => {
  let component: EnfasesComponent;
  let fixture: ComponentFixture<EnfasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
