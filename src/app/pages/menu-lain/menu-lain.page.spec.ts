import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLainPage } from './menu-lain.page';

describe('MenuLainPage', () => {
  let component: MenuLainPage;
  let fixture: ComponentFixture<MenuLainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
