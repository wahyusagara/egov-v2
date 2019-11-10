import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriDataPage } from './entri-data.page';

describe('EntriDataPage', () => {
  let component: EntriDataPage;
  let fixture: ComponentFixture<EntriDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntriDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
