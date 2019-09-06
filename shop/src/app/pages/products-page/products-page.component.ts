import { ProductsService } from '../../services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  @Output() productSelectedEvent = new EventEmitter<Product>();
  @Output() onEditProductEvent = new EventEmitter<Product>();
  categoriesList: Category[];
  productList$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  categorySelected(category: Category) {
    this.productsService.getProductsByCategory(category);
  }

  editProductClicked(product: Product) {
    this.onEditProductEvent.emit(product);
  }

  ngOnInit() {
    this.productList$ = this.productsService.fetchAllProducts();

    this.categoriesList = this.productsService.getAllCategories();
  }
}
