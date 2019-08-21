import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamersPage } from './streamers.page';

describe('StreamersPage', () => {
  let component: StreamersPage;
  let fixture: ComponentFixture<StreamersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
