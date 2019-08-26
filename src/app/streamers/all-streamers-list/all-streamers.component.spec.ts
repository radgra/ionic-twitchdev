import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStreamersListComponent } from './all-streamers-list.component';

describe('AllStreamersComponent', () => {
  let component: AllStreamersListComponent;
  let fixture: ComponentFixture<AllStreamersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStreamersListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStreamersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
