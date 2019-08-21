import { DataLoader } from './data/dataLoader';
import { Component, OnInit } from '@angular/core';
import { fade } from './animations/fade.animation';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

enum Page {
  Home = 'Home',
  About = 'About',
  Products = 'Products',
  Contact = 'Contact',
  ProductDetails = 'Product Details'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  title = 'shop';
  currentPage: Page = Page.Home;
  currentProduct: Product = null;
  menubarMode: boolean = false;
  categoriesList: Category[];
  pagesNames = [Page.Home, Page.About, Page.Products, Page.Contact];

  constructor() {}

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: Page) {
    this.currentPage = page;
  }
  productSelected(product: Product) {
    this.currentProduct = product;
    this.currentPage = Page.ProductDetails;
  }

  ngOnInit(): void {
    this.categoriesList = DataLoader.loadCategories();
  }
}
