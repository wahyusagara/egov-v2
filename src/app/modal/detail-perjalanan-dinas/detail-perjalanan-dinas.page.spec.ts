import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPerjalananDinasPage } from './detail-perjalanan-dinas.page';

describe('DetailPerjalananDinasPage', () => {
  let component: DetailPerjalananDinasPage;
  let fixture: ComponentFixture<DetailPerjalananDinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPerjalananDinasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPerjalananDinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
