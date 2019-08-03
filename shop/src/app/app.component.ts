import { Product } from './../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  menubarMode: boolean = false;
  productList: Product[] = [
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1000, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1100, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
    new Product('1234', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog')
  ];
  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
}
