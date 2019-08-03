import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() categoryId: string;
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() price: number;
  @Input() description: string;
  constructor() {}

  ngOnInit() {}
}
