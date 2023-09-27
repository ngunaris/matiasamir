import { TestBed } from '@angular/core/testing';

import { AdminisitradorService } from './adminisitrador.service';

describe('AdminisitradorService', () => {
  let service: AdminisitradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminisitradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
