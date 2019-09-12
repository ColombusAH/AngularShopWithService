import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCartComponent } from './product-details-cart.component';

describe('ProductDetailsCartComponent', () => {
  let component: ProductDetailsCartComponent;
  let fixture: ComponentFixture<ProductDetailsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
