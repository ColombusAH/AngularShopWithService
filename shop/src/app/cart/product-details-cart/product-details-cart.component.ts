import { ProductsService } from '../../core/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-details-cart',
  templateUrl: './product-details-cart.component.html',
  styleUrls: ['./product-details-cart.component.css']
})
export class ProductDetailsCartComponent implements OnInit, OnDestroy {
  product: Product;
  paramMapsubscription: Subscription;
  prodcutState$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  crossBtnclicked() {
    this.router.navigate(['/cart']);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit(): void {
    //Todo: implementation should change after using real api
    this.paramMapsubscription = this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.prodcutState$ = this.productService.productsState$.pipe(take(1));
      this.prodcutState$.subscribe(products => {
        this.product = products.find(p => p.id === id);
      });
    });
  }

  ngOnDestroy(): void {
    this.paramMapsubscription.unsubscribe();
  }
}
