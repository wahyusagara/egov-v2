import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKendaraanComponent } from './list-kendaraan.component';

describe('ListKendaraanComponent', () => {
  let component: ListKendaraanComponent;
  let fixture: ComponentFixture<ListKendaraanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKendaraanComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKendaraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
