import { TestBed } from '@angular/core/testing';

import { SliderDataServiceService } from './slider-data-service.service';

describe('SliderDataServiceService', () => {
  let service: SliderDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
