import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStreamerFormPage } from './add-streamer-form.page';

describe('AddStreamerFormPage', () => {
  let component: AddStreamerFormPage;
  let fixture: ComponentFixture<AddStreamerFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStreamerFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStreamerFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
