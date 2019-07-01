import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBPage } from './categoria-b.page';

describe('CategoriaBPage', () => {
  let component: CategoriaBPage;
  let fixture: ComponentFixture<CategoriaBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
