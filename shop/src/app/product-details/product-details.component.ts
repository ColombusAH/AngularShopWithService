import { Product } from './../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {
  @Input() product: Product;
  @Output() backBtnclickedEvent = new EventEmitter<string>();
  constructor() {}
  backBtnclicked() {
    this.backBtnclickedEvent.emit('Products');
  }
}
