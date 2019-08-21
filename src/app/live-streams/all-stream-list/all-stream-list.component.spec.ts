import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStreamListComponent } from './all-stream-list.component';

describe('AllStreamListComponent', () => {
  let component: AllStreamListComponent;
  let fixture: ComponentFixture<AllStreamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStreamListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
