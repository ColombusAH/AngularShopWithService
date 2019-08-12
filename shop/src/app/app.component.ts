import { DataLoader } from './data/dataLoader';
import { Category } from './../models/category';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('changeMainView', [
      state('change', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'shop';
  currentPage: string = 'Home';
  currentProduct: Product = null;
  menubarMode: boolean = false;
  allProducts: Product[];
  productList: Product[];
  pagesNames = ['Home', 'About', 'Products', 'Contact'];

  categoriesList: Category[] = [
    new Category('0', 'All'),
    new Category('1', 'man'),
    new Category('2', 'woman')
  ];

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: string) {
    this.currentPage = page;
  }

  sortProductsByCategory(category: Category) {
    this.productList = Object.assign([], this.allProducts);
    if (category.title.toLowerCase() !== 'all') {
      this.productList = this.productList.filter(
        p => p.categoryId.localeCompare(category.id) === 0
      );
    }
  }

  productSelected(product: Product) {
    this.currentProduct = product;
    this.currentPage = 'Product Details';
  }

  ngOnInit(): void {
    this.allProducts = DataLoader.loadProducts();
    this.productList = Object.assign([], this.allProducts);
  }
}
