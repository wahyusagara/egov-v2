import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerjalananDinasPage } from './perjalanan-dinas.page';

describe('PerjalananDinasPage', () => {
  let component: PerjalananDinasPage;
  let fixture: ComponentFixture<PerjalananDinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerjalananDinasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerjalananDinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
