import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDiscenteComponent } from './portal-discente.component';

describe('PortalDiscenteComponent', () => {
  let component: PortalDiscenteComponent;
  let fixture: ComponentFixture<PortalDiscenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalDiscenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalDiscenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
