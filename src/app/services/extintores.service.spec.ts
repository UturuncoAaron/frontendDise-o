import { TestBed } from '@angular/core/testing';

import { ExtintoresService } from './extintores.service';

describe('ExtintoresService', () => {
  let service: ExtintoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtintoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
