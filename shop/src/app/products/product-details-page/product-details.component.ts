import { Product } from '../../core/models/product.model';
import { ProductsService } from '../../core/services/products.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  paramMapsubscription: Subscription;
  prodcutState$: Observable<Product[]>;
  productID: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) {}

  backBtnclicked() {
    this.location.back();
  }

  ngOnInit(): void {
    //Todo: implementation should change after using real api
    this.paramMapsubscription = this.route.paramMap.subscribe(params => {
      this.productID = params.get('id');
      this.prodcutState$ = this.productService.productsState$;
    });
  }

  ngOnDestroy(): void {
    this.paramMapsubscription.unsubscribe();
  }
}
