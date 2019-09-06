import { TestBed, async, inject } from '@angular/core/testing';

import { ProductResolverGuard } from './product-resolver.guard';

describe('ProductResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolverGuard]
    });
  });

  it('should ...', inject([ProductResolverGuard], (guard: ProductResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
