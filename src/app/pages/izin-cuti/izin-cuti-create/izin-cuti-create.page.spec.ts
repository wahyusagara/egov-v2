import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzinCutiCreatePage } from './izin-cuti-create.page';

describe('IzinCutiCreatePage', () => {
  let component: IzinCutiCreatePage;
  let fixture: ComponentFixture<IzinCutiCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzinCutiCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzinCutiCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
