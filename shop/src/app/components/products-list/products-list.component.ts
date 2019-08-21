import { Component, Input, Output, EventEmitter } from '@angular/core';
import { fade } from '../../animations/fade.animation';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  animations: [fade]
})
export class ProductsListComponent {
  @Input() products: Product[];
  @Output() onProductSelectedEvent = new EventEmitter<Product>();
  constructor() {}

  productClicked(product: Product) {
    this.onProductSelectedEvent.emit(product);
  }
}
