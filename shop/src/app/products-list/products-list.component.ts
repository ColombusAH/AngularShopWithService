import { Product } from './../../models/product';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  animations: [
    trigger('addProduct', [
      state('onAdd', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class ProductsListComponent {
  @Input() products: Product[];
  @Output() onProductClicked = new EventEmitter<Product>();
  constructor() {}

  productClicked(product: Product) {
    this.onProductClicked.emit(product);
  }
}
