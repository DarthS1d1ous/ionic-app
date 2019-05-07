import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesPage } from './pictures.page';

describe('PicturesPage', () => {
  let component: PicturesPage;
  let fixture: ComponentFixture<PicturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
