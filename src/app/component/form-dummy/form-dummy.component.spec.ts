import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDummyComponent } from './form-dummy.component';

describe('FormDummyComponent', () => {
  let component: FormDummyComponent;
  let fixture: ComponentFixture<FormDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDummyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
