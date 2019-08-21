import { ProductsService } from '../../services/products.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  @Output() productSelectedEvent = new EventEmitter<Product>();
  @Input() categoriesList: Category[];
  productList: Product[];

  constructor(private productsService: ProductsService) {}

  categorySelected(category: Category) {
    this.productList = this.productsService.getProductsByCategory(category);
  }
  productSelected(product: Product) {
    this.productSelectedEvent.emit(product);
  }
  ngOnInit() {
    this.productList = this.productsService.getAllProducts();
  }
}
