import { TestBed, inject } from '@angular/core/testing';

import { NgffDataService } from './ngff-data.service';

describe('NgffDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgffDataService]
    });
  });

  it('should be created', inject([NgffDataService], (service: NgffDataService) => {
    expect(service).toBeTruthy();
  }));
});
