import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullInfoPage } from './full-info.page';

describe('FullInfoPage', () => {
  let component: FullInfoPage;
  let fixture: ComponentFixture<FullInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
