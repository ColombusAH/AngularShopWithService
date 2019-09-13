import { ProductsService } from '../../core/services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { Category } from 'src/app/core/models/category.model';
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
  choosedCategory: Category;
  productList$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  categorySelected(category: Category) {
    this.choosedCategory = category;
  }

  editProductClicked(product: Product) {
    this.onEditProductEvent.emit(product);
  }

  async ngOnInit() {
    this.categoriesList = await this.productsService.getAllCategories();
    this.productList$ = this.productsService.productsState$;
    this.choosedCategory = this.categoriesList[0];
  }
}
