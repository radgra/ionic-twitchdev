import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStreamerPage } from './add-streamer.page';

describe('AddStreamerPage', () => {
  let component: AddStreamerPage;
  let fixture: ComponentFixture<AddStreamerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStreamerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStreamerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
