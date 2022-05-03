import { TestBed } from '@angular/core/testing';

import { DIServiceService } from './diservice.service';

describe('DIServiceService', () => {
  let service: DIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
