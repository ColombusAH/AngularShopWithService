import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';
import { fade } from './animations/fade.animation';
import { Product } from './models/product.model';

enum Page {
  Home = 'Home',
  About = 'About',
  Products = 'Products',
  Contact = 'Contact',
  ProductDetails = 'Product Details',
  Login = 'Login'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent {
  title = 'shop';
  currentPage: Page = Page.Home;
  currentProduct: Product = null;
  menubarMode: boolean = false;
  pagesNames = [Page.Home, Page.About, Page.Products, Page.Contact];
  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {}

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

  logout() {
    this.userService.logout();
    this.toggleMenuBar();
  }

  loginSucess() {
    this.changePage(Page.Home);
  }
  userIsLoggedIn(): boolean {
    return this.userService.userLoggedIn();
  }
}
