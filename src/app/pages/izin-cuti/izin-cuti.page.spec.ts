import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzinCutiPage } from './izin-cuti.page';

describe('IzinCutiPage', () => {
  let component: IzinCutiPage;
  let fixture: ComponentFixture<IzinCutiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzinCutiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzinCutiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
