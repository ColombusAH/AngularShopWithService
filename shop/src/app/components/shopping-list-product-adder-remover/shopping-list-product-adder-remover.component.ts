import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-list-product-adder-remover',
  templateUrl: './shopping-list-product-adder-remover.component.html',
  styleUrls: ['./shopping-list-product-adder-remover.component.css']
})
export class ShoppingListProductAdderRemoverComponent implements OnInit {
  @Input() product: Product;
  @Input() includeCounter: boolean = false;
  counter: number = 0;
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addProduct(this.product);
    this.counter++;
  }
  removeFromCart() {
    this.cartService.removeProduct(this.product);
    this.counter--;
  }

  ngOnInit(): void {
    this.counter = this.cartService.getQuantityInShopingList(this.product);
  }
}
