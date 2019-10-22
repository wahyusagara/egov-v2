import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtasanPage } from './atasan.page';

describe('AtasanPage', () => {
  let component: AtasanPage;
  let fixture: ComponentFixture<AtasanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtasanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtasanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
