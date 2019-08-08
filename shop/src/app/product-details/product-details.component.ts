import { Product } from './../../models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  @Output() backBtnclickedEvent = new EventEmitter();
  constructor() {}
  backBtnclicked() {
    this.backBtnclickedEvent.emit();
  }
  ngOnInit() {}
}
