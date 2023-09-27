import { TestBed } from '@angular/core/testing';

import { AltoRendimientoService } from './alto-rendimiento.service';

describe('AltoRendimientoService', () => {
  let service: AltoRendimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltoRendimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
