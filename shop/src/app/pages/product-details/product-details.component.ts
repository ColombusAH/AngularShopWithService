import { CartService } from './../../services/cart.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: Product;
  @Output() backBtnclickedEvent = new EventEmitter<string>();
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addProduct(this.product);
  }
  removeFromCart() {
    this.cartService.removeProduct(this.product);
  }

  backBtnclicked() {
    this.backBtnclickedEvent.emit('Products');
  }
}
