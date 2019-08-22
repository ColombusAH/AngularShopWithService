import { Product } from './../models/product.model';
import { ProductItem } from './../models/productItem.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private shopingList: ProductItem[] = [];
  constructor() {
    console.log('cart service created');
  }

  addProduct(product: Product) {
    //for now compared with ref , should compare with id when using real data.
    const index = _.findIndex(this.shopingList, pi => pi.prodcut === product);
    if (index === -1) {
      this.shopingList.push(new ProductItem(product));
    } else {
      this.shopingList[index].quantity += 1;
    }
  }

  removeProduct(product: Product) {
    const index = _.findIndex(this.shopingList, pi => pi.prodcut == product);
    if (index !== -1) {
      this.shopingList[index].quantity -= 1;
      if (this.shopingList[index].quantity === 0) {
        _.remove(this.shopingList, pi => pi.prodcut === product);
      }
    }
  }

  shopingListSize() {
    let size = 0;
    _.forEach(this.shopingList, pi => (size += pi.quantity));
    return size;
  }
}
