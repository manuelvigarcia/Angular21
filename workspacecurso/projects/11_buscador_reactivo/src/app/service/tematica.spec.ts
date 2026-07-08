import { TestBed } from '@angular/core/testing';

import { Tematica } from './tematica';

describe('Tematica', () => {
  let service: Tematica;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tematica);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
