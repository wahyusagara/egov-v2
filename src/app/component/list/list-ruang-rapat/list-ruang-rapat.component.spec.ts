import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRuangRapatComponent } from './list-ruang-rapat.component';

describe('ListRuangRapatComponent', () => {
  let component: ListRuangRapatComponent;
  let fixture: ComponentFixture<ListRuangRapatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRuangRapatComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRuangRapatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
