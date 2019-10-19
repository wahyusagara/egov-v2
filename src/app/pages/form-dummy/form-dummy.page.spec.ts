import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDummyPage } from './form-dummy.page';

describe('FormDummyPage', () => {
  let component: FormDummyPage;
  let fixture: ComponentFixture<FormDummyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDummyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDummyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
