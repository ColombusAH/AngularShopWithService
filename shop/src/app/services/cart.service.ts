import { Product } from './../models/product.model';
import { ProductItem } from './../models/productItem.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private shoppingList: ProductItem[] = [];
  constructor() {}

  addProduct(product: Product) {
    //for now compared with ref , should compare with id when using real data.
    const index = _.findIndex(this.shoppingList, pi => pi.prodcut === product);
    if (index === -1) {
      this.shoppingList.push(new ProductItem(product));
    } else {
      this.shoppingList[index].quantity += 1;
    }
  }

  removeProduct(product: Product) {
    _.remove(this.shoppingList, pi => pi.prodcut === product);
  }
}
