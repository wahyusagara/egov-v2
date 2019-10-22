import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPegawaiPage } from './daftar-pegawai.page';

describe('DaftarPegawaiPage', () => {
  let component: DaftarPegawaiPage;
  let fixture: ComponentFixture<DaftarPegawaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPegawaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPegawaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
