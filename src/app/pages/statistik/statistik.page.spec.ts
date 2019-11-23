import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistikPage } from './statistik.page';

describe('StatistikPage', () => {
  let component: StatistikPage;
  let fixture: ComponentFixture<StatistikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistikPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
