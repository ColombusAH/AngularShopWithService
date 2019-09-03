import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';
import { fade } from './animations/fade.animation';
import { Product } from './models/product.model';
import { PermissionService } from './services/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fade]
})
export class AppComponent {
  title = 'shop';
  menubarMode: boolean = false;

  toggleMenuBar() {
    this.menubarMode = !this.menubarMode;
  }
}
