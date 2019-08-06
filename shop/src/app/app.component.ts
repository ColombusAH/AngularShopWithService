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
  currentProduct: Product = null;
  menubarMode: boolean = false;

  pagesNames = ['Home', 'About', 'Products', 'Contact'];

  productList = this.getAllProducts();

  categoriesList: Category[] = [
    new Category('0', 'All'),
    new Category('1', 'cat1'),
    new Category('2', 'cat2'),
    new Category('3', 'cat3'),
    new Category('4', 'cat4')
  ];

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: string) {
    this.currentPage = page;
  }

  sortProductsByCategory(category: Category) {
    this.productList = this.getAllProducts();
    if (category.title.toLowerCase() !== 'all') {
      this.productList = this.productList.filter(
        p => p.categoryId.localeCompare(category.id) === 0
      );
    }
  }

  private getAllProducts(): Product[] {
    const productList: Product[] = [
      new Product(
        '1',
        'assets/products/11.jpeg',
        'dog',
        1000,
        'Just a dog ffvgrfrgfrffrgfvtgrfvghrvghrvghrvghrfvgtghrvtgfdvtgffbrfvghrvghr'
      ),
      new Product('2', 'assets/products/11.jpeg', 'dog', 1100, 'Just a dog'),
      new Product('3', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('1', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('2', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('3', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('1', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('4', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('4', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog'),
      new Product('4', 'assets/products/11.jpeg', 'dog', 1200, 'Just a dog')
    ];
    return productList;
  }

  productSelected(product: Product) {
    this.currentProduct = product;
    this.currentPage = 'Product Details';
  }
}
