import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskKepegawaianPage } from './helpdesk-kepegawaian.page';

describe('HelpdeskKepegawaianPage', () => {
  let component: HelpdeskKepegawaianPage;
  let fixture: ComponentFixture<HelpdeskKepegawaianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskKepegawaianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskKepegawaianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
