import { DataLoader } from './data/dataLoader';
import { Category } from './../models/category';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { fade } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  title = 'shop';
  currentPage: string = 'Home';
  currentProduct: Product = null;
  menubarMode: boolean = false;
  allProducts: Product[];
  categoriesList: Category[];
  pagesNames = ['Home', 'About', 'Products', 'Contact'];

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: string) {
    this.currentPage = page;
  }
  productSelected(product: Product) {
    this.currentProduct = product;
    this.currentPage = 'Product Details';
  }

  ngOnInit(): void {
    this.allProducts = DataLoader.loadProducts();
    this.categoriesList = DataLoader.loadCategories();
  }
}
