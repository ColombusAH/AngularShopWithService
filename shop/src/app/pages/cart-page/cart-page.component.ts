import { ProductItem } from './../../models/productItem.model';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnDestroy {
  cartSubscription: Subscription;
  shopingList: ProductItem[];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {
    this.cartSubscription = this.cartService.shoppingListState.subscribe(
      cartState => {
        this.shopingList = cartState.productsList;
        this.totalPrice = cartState.totalPrice;
      }
    );
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }
}
