import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  constructor(private cartService: CartService) {
    console.log(cartService.shopingList[0].product.imageUrl);
  }
}
