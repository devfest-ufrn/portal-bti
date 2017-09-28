import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapresentationComponent } from './papresentation.component';

describe('PapresentationComponent', () => {
  let component: PapresentationComponent;
  let fixture: ComponentFixture<PapresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
