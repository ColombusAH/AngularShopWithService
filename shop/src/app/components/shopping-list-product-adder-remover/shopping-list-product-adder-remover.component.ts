import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-list-product-adder-remover',
  templateUrl: './shopping-list-product-adder-remover.component.html',
  styleUrls: ['./shopping-list-product-adder-remover.component.css']
})
export class ShoppingListProductAdderRemoverComponent {
  @Input() product: Product;
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addProduct(this.product);
  }
  removeFromCart() {
    this.cartService.removeProduct(this.product);
  }
}
