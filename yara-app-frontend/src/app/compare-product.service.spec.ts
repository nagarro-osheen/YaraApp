import { TestBed, inject } from '@angular/core/testing';

import { CompareProductService } from './compare-product.service';

describe('CompareProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompareProductService]
    });
  });

  it('should be created', inject([CompareProductService], (service: CompareProductService) => {
    expect(service).toBeTruthy();
  }));
});
