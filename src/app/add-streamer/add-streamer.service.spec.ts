import { TestBed } from '@angular/core/testing';

import { AddStreamerService } from './add-streamer.service';

describe('AddStreamerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStreamerService = TestBed.get(AddStreamerService);
    expect(service).toBeTruthy();
  });
});
