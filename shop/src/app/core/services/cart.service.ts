import { UserService } from 'src/app/core/services/user.service';
import { ProductItem } from '../models/productItem.model';
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ICartState {
  productsList: ProductItem[];
  size: number;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _shoppingListSubject: BehaviorSubject<ICartState>;
  public CartState$: Observable<ICartState>;

  private cart: ICartState = {
    productsList: [],
    size: 0,
    totalPrice: 0
  };

  constructor(private userService: UserService) {
    this.initializeCartState();

    this._shoppingListSubject = new BehaviorSubject({
      productsList: this.cart.productsList,
      size: this.getTotalSize(),
      totalPrice: this.getTotalPrice()
    });
    this.CartState$ = this._shoppingListSubject.asObservable();

    this.userService.currentUserState.subscribe(user => {
      if (!user) {
        this.emptyCart();
      }
    });
  }

  addProduct(product: Product): void {
    this.cart.totalPrice += product.price;
    this.cart.size += 1;
    const index = _.findIndex(
      this.cart.productsList,
      pi => pi.product.id === product.id
    );
    if (index === -1) {
      this.cart.productsList.push({ product, quantity: 1 });
    } else {
      this.cart.productsList[index].quantity += 1;
    }
    this.setNext();
  }

  removeProduct(product: Product): void {
    const index = _.findIndex(
      this.cart.productsList,
      pi => pi.product.id === product.id
    );
    if (index !== -1) {
      this.cart.totalPrice -= product.price;
      this.cart.size -= 1;
      this.cart.productsList[index].quantity -= 1;
      if (this.cart.productsList[index].quantity === 0) {
        _.remove(this.cart.productsList, pi => pi.product.id === product.id);
      }
      this.setNext();
    }
  }

  private setNext() {
    this._shoppingListSubject.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart.productsList));
  }

  emptyCart(): void {
    this.cart.productsList = [];
    this.cart.size = 0;
    this.cart.totalPrice = 0;
    this.setNext();
  }

  getQuantityInShopingList(prodduct: Product) {
    const index = this.cart.productsList.findIndex(
      pi => prodduct.id === pi.product.id
    );
    if (index === -1) {
      return 0;
    } else {
      return this.cart.productsList[index].quantity;
    }
  }

  getTotalSize(): number {
    let size = 0;
    this.cart.productsList.forEach(pi => (size += pi.quantity));
    return size;
  }

  getTotalPrice(): number {
    let price = 0;
    this.cart.productsList.forEach(
      pi => (price += pi.quantity * pi.product.price)
    );
    return price;
  }

  initializeCartState(): void {
    this.cart.productsList =
      (JSON.parse(localStorage.getItem('cart')) as ProductItem[]) || [];
    this.cart.totalPrice = this.getTotalPrice();
    this.cart.size = this.getTotalSize();
  }
}
