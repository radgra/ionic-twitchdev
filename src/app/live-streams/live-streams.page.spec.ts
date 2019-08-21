import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamsPage } from './live-streams.page';

describe('LiveStreamsPage', () => {
  let component: LiveStreamsPage;
  let fixture: ComponentFixture<LiveStreamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
