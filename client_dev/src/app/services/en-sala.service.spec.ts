import { TestBed } from '@angular/core/testing';

import { EnSalaService } from './en-sala.service';

describe('EnSalaService', () => {
  let service: EnSalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnSalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
