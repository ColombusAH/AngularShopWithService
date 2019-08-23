import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuBarTogglerEvent = new EventEmitter();
  @Output() pageNavigaterEvent = new EventEmitter<string>();
  @Input() cartSize: number = 0;
  faShoppingCart = faShoppingCart;

  constructor() {}

  onMenuBarBtnClicked() {
    this.menuBarTogglerEvent.emit();
  }

  onCartClicked() {
    this.pageNavigaterEvent.emit('Cart');
  }
}
