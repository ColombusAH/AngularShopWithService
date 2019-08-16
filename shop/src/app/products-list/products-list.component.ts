import { Product } from './../../models/product';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  animations: [fade]
})
export class ProductsListComponent {
  @Input() products: Product[];
  @Output() onProductClicked = new EventEmitter<Product>();
  constructor() {}

  productClicked(product: Product) {
    this.onProductClicked.emit(product);
  }
}
