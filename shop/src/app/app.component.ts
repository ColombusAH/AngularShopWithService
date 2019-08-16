import { DataLoader } from './data/dataLoader';
import { Category } from './../models/category';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { fade } from './animations';

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
  allProducts: Product[];
  categoriesList: Category[];
  pagesNames = [Page.Home, Page.About, Page.Products, Page.Contact];

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
    this.allProducts = DataLoader.loadProducts();
    this.categoriesList = DataLoader.loadCategories();
  }
}
