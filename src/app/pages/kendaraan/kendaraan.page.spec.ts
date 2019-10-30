import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendaraanPage } from './kendaraan.page';

describe('KendaraanPage', () => {
  let component: KendaraanPage;
  let fixture: ComponentFixture<KendaraanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendaraanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendaraanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
