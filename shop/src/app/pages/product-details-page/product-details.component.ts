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
