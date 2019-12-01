import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPerjadinPage } from './approval-perjadin.page';

describe('ApprovalPerjadinPage', () => {
  let component: ApprovalPerjadinPage;
  let fixture: ComponentFixture<ApprovalPerjadinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalPerjadinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalPerjadinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
