import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shoping-icons',
  templateUrl: './shoping-icons.component.html',
  styleUrls: ['./shoping-icons.component.css']
})
export class ShopingIconsComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addProduct(this.product);
  }
  removeFromCart() {
    this.cartService.removeProduct(this.product);
  }

  ngOnInit() {}
}
