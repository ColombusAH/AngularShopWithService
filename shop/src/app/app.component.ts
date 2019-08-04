import { Category } from './../models/category';
import { Product } from './../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  currentPage: string = 'Home';
  menubarMode: boolean = false;

  pagesNames = ['Home', 'About', 'Products', 'Contact'];

  productList: Product[] = [
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1000, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1100, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog')
  ];

  categoriesList: Category[] = [
    new Category('1', 'cat1'),
    new Category('2', 'cat2'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3'),
    new Category('3', 'cat3')
  ];

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: string) {
    this.currentPage = page;
  }
}
