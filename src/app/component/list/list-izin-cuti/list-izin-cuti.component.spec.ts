import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIzinCutiComponent } from './list-izin-cuti.component';

describe('ListIzinCutiComponent', () => {
  let component: ListIzinCutiComponent;
  let fixture: ComponentFixture<ListIzinCutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIzinCutiComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIzinCutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
