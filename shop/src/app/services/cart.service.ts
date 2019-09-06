import { ProductItem } from './../models/productItem.model';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartState {
  productsList: ProductItem[];
  size: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _shoppingListSubject: BehaviorSubject<CartState>;
  public shoppingListState: Observable<CartState>;

  private _productItems: ProductItem[] = [];
  private _size: number = 0;
  private _totalPrice: number = 0;

  constructor() {
    this._productItems =
      (JSON.parse(localStorage.getItem('cart')) as ProductItem[]) || [];
    this._shoppingListSubject = new BehaviorSubject({
      productsList: this._productItems,
      size: this.getTotalSize(),
      totalPrice: this.getTotalPrice()
    });
    this.shoppingListState = this._shoppingListSubject.asObservable();
  }

  addProduct(product: Product): void {
    this._totalPrice += product.price;
    this._size += 1;
    const index = _.findIndex(
      this._productItems,
      pi => pi.product.id === product.id
    );
    if (index === -1) {
      this._productItems.push(new ProductItem(product));
    } else {
      this._productItems[index].quantity += 1;
    }
    this.setNext();
  }

  removeProduct(product: Product): void {
    const index = _.findIndex(
      this._productItems,
      pi => pi.product.id === product.id
    );
    if (index !== -1) {
      this._totalPrice -= product.price;
      this._size -= 1;
      this._productItems[index].quantity -= 1;
      if (this._productItems[index].quantity === 0) {
        _.remove(this._productItems, pi => pi.product.id === product.id);
      }
    }
    this.setNext();
  }

  private setNext() {
    this._shoppingListSubject.next({
      productsList: this._productItems,
      size: this._size,
      totalPrice: this._totalPrice
    });
    localStorage.setItem('cart', JSON.stringify(this._productItems));
  }

  emptyCart(): void {
    this._productItems = [] as ProductItem[];
    this._size = 0;
    this._totalPrice = 0;
    this.setNext();
  }

  getQuantityInShopingList(prodduct: Product) {
    const index = this._productItems.findIndex(
      pi => prodduct.id === pi.product.id
    );
    if (index === -1) {
      return 0;
    } else {
      return this._productItems[index].quantity;
    }
  }

  getTotalSize(): number {
    let size = 0;
    this._productItems.forEach(pi => (size += pi.quantity));
    return size;
  }

  getTotalPrice(): number {
    let price = 0;
    this._productItems.forEach(pi => (price += pi.quantity * pi.product.price));
    return price;
  }
}
