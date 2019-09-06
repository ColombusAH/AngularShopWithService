import { ProductsService } from './../services/products.service';
import { Injectable, OnDestroy } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  Router,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverGuard implements Resolve<Product> {
  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<Product> | Promise<Product> {
    console.log(route.params);
    return new Product('', '', '', '', 1, '');
  }
}
