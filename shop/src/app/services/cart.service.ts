import { Product } from './../models/product.model';
import { ProductItem } from './../models/productItem.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _shopingList: ProductItem[] = [];
  private _totalPrice: number = 0;
  constructor() {
    
  }

  addProduct(product: Product) {
    //for now compared with ref , should compare with id when using real data.
    this._totalPrice += product.price;
    const index = _.findIndex(this._shopingList, pi => pi.product.id === product.id);
    if (index === -1) {
      this._shopingList.push(new ProductItem(product));
    } else {
      this._shopingList[index].quantity += 1;
    }
  }

  removeProduct(product: Product) {
    const index = _.findIndex(this._shopingList, pi => pi.product.id === product.id);
    if (index !== -1) {
      this._totalPrice -= product.price;
      this._shopingList[index].quantity -= 1;
      if (this._shopingList[index].quantity === 0) {
        _.remove(this._shopingList, pi => pi.product.id === product.id);
      }
    }
  }

  shopingListSize() {
    let size = 0;
    _.forEach(this._shopingList, pi => (size += pi.quantity));
    return size;
  }

  public get shopingList(): ProductItem[] {
    return this._shopingList;
  }

  getQuantityInShopingList(prodduct: Product) {
    const index = this.shopingList.findIndex(pi => prodduct.id === pi.product.id);
    if (index === -1) {
      return 0;
    } else {
      return this.shopingList[index].quantity;
    }
  }

  
  public  getTotalPrice() : number {
    return this._totalPrice;
  }
  
}
