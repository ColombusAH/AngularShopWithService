import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models/product';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  @Input() allProducts: Product[];
  @Output() productSelectedEvent = new EventEmitter<Product>();
  @Input() categoriesList: Category[];
  productList: Product[];

  constructor() {}

  sortProductsByCategory(category: Category) {
    this.productList = [...this.allProducts];
    if (category.title.toLowerCase() !== 'all') {
      this.productList = this.productList.filter(
        p => p.categoryId.localeCompare(category.id) === 0
      );
    }
  }
  productSelected(product: Product) {
    this.productSelectedEvent.emit(product);
  }
  ngOnInit() {
    this.productList = this.allProducts;
  }
}
