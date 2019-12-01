import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerjalananDinasApprovalComponent } from './list-perjalanan-dinas-approval.component';

describe('ListPerjalananDinasApprovalComponent', () => {
  let component: ListPerjalananDinasApprovalComponent;
  let fixture: ComponentFixture<ListPerjalananDinasApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPerjalananDinasApprovalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPerjalananDinasApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
