import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfaseComponent } from './enfase.component';

describe('EnfaseComponent', () => {
  let component: EnfaseComponent;
  let fixture: ComponentFixture<EnfaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
