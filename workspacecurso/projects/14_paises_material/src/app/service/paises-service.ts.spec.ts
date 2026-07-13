import { TestBed } from '@angular/core/testing';

import { PaisesServiceTs } from './paises-service.ts';

describe('PaisesServiceTs', () => {
  let service: PaisesServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
