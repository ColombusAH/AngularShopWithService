import { CartService } from './../services/cart.service';
import { Component, Output, EventEmitter, DoCheck } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  @Output() menuBarTogglerEvent = new EventEmitter();
  @Output() pageNavigaterEvent = new EventEmitter<string>();
  faShoppingCart = faShoppingCart;
  cartSize: number = 0;
  constructor(private cartService: CartService) {}

  onMenuBarBtnClicked() {
    this.menuBarTogglerEvent.emit();
  }

  onCartClicked() {
    this.pageNavigaterEvent.emit('Cart');
  }
  ngDoCheck(): void {
    this.cartSize = this.cartService.shopingListSize();
  }
}
