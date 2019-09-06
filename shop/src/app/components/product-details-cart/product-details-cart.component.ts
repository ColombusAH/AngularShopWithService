import { ProductsService } from './../../services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product.model';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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
    private productService: ProductsService,
    private location: Location
  ) {}

  backBtnclicked() {
    this.location.back();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit(): void {
    //Todo: implementation should change after using real api
    this.paramMapsubscription = this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.prodcutState$ = this.productService.fetchAllProducts().pipe(take(1));
      this.prodcutState$.subscribe(products => {
        this.product = products.find(p => p.id === id);
      });
    });
  }

  ngOnDestroy(): void {
    this.paramMapsubscription.unsubscribe();
  }
}
