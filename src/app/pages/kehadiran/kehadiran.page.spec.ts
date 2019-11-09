import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KehadiranPage } from './kehadiran.page';

describe('KehadiranPage', () => {
  let component: KehadiranPage;
  let fixture: ComponentFixture<KehadiranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KehadiranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KehadiranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
