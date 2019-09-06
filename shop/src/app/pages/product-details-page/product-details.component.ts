import { ProductsService } from '../../services/products.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { take } from 'rxjs/operators';
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
      this.prodcutState$ = this.productService.fetchAllProducts();
    });
  }

  ngOnDestroy(): void {
    this.paramMapsubscription.unsubscribe();
  }
}
