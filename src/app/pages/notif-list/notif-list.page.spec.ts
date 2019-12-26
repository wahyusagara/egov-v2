import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifListPage } from './notif-list.page';

describe('NotifListPage', () => {
  let component: NotifListPage;
  let fixture: ComponentFixture<NotifListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
