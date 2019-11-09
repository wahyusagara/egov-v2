import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogBookComponent } from './list-log-book.component';

describe('ListLogBookComponent', () => {
  let component: ListLogBookComponent;
  let fixture: ComponentFixture<ListLogBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLogBookComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
