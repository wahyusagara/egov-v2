import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuangRapatPage } from './ruang-rapat.page';

describe('RuangRapatPage', () => {
  let component: RuangRapatPage;
  let fixture: ComponentFixture<RuangRapatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuangRapatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuangRapatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
