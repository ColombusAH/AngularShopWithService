import { Product } from './../models/product';
import { Component } from '@angular/core';

export enum PageName {
  Home = 'Home',
  About = 'About',
  Products = 'Products',
  Contact = 'Contact'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  currentPage: PageName = PageName.Home;
  menubarMode: boolean = false;
  productList: Product[] = [
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1000, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1100, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog')
  ];
  pagesNames = ['Home', 'About', 'Products', 'Contact'];

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: PageName) {
    console.log(page);
  }
}
