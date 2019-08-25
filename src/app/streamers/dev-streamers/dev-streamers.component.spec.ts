import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevStreamersComponent } from './dev-streamers.component';

describe('DevStreamersComponent', () => {
  let component: DevStreamersComponent;
  let fixture: ComponentFixture<DevStreamersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevStreamersComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevStreamersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
