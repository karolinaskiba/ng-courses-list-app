import { TestBed } from '@angular/core/testing';

import { CorsesService } from './corses.service';

describe('CorsesService', () => {
  let service: CorsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
