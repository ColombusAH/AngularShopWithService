import { Product } from './../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onProductClicked = new EventEmitter<Product>();
  constructor() {}

  productClicked(product: Product) {
    this.onProductClicked.emit(product);
  }
  ngOnInit() {}
}
