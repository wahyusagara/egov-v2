import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaPage } from './berita.page';

describe('BeritaPage', () => {
  let component: BeritaPage;
  let fixture: ComponentFixture<BeritaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeritaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
