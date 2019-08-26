import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerItemComponent } from './streamer-item.component';

describe('StreamerItemComponent', () => {
  let component: StreamerItemComponent;
  let fixture: ComponentFixture<StreamerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamerItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
