import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productclickedEvent = new EventEmitter<Product>();
  constructor() {}

  productClicked() {
    this.productclickedEvent.emit(this.product);
  }
}
