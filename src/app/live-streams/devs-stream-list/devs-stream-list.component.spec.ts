import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsStreamListComponent } from './devs-stream-list.component';

describe('DevsStreamListComponent', () => {
  let component: DevsStreamListComponent;
  let fixture: ComponentFixture<DevsStreamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevsStreamListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsStreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
