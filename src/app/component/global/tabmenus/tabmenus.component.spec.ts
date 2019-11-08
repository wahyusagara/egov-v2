import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenusComponent } from './tabmenus.component';

describe('TabmenusComponent', () => {
  let component: TabmenusComponent;
  let fixture: ComponentFixture<TabmenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmenusComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
