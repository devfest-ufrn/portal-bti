import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientadorComponent } from './orientador.component';

describe('OrientadorComponent', () => {
  let component: OrientadorComponent;
  let fixture: ComponentFixture<OrientadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
