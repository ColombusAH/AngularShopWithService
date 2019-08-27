import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';
import { fade } from './animations/fade.animation';
import { Product } from './models/product.model';
import { PermissionService } from './services/permission.service';

enum Page {
  Home = 'Home',
  About = 'About',
  Products = 'Products',
  Contact = 'Contact',
  ProductDetails = 'Product Details',
  Login = 'Login',
  ProductManagement = 'ProductManagement'
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
  previousPage: Page = Page.Home;
  currentProduct: Product = null;
  menubarMode: boolean = false;
  userHavePermission: boolean = false;
  pagesNames = [Page.Home, Page.About, Page.Products, Page.Contact];

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private permissionService: PermissionService
  ) {}

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
  changePage(page: Page) {
    this.previousPage = this.currentPage;
    this.currentPage = page;
  }

  navigateToPreviousPage() {
    this.changePage(this.previousPage);
  }

  productSelected(product: Product) {
    this.currentProduct = product;
    this.currentPage = Page.ProductDetails;
  }

  logout() {
    this.userService.logout();
    this.toggleMenuBar();
    this.userHavePermission = false;
    this.cartService.emptyCart();
  }

  loginSucess() {
    this.changePage(Page.Home);
    this.userHavePermission = this.permissionService.userHavePermission();
  }
  userIsLoggedIn(): boolean {
    return this.userService.userLoggedIn();
  }

  getCartSize(): number {
    return this.cartService.shopingListSize();
  }

  editProduct(product: Product) {
    this.currentProduct = product;
    this.changePage(Page.ProductManagement);
  }

  ngOnInit(): void {
    this.userHavePermission = this.permissionService.userHavePermission();
  }
}
