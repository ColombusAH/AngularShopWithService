import { UserService } from 'src/app/core/services/user.service';
import { CartService, ICartState } from '../../../core/services/cart.service';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnDestroy
} from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  @Output() menuBarTogglerEvent = new EventEmitter();

  cartSize: number = 0;
  user: User;
  faShoppingCart = faShoppingCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {
    this.cartSubscription = this.cartService.CartState$.subscribe(
      cartState => (this.cartSize = cartState.size)
    );

    this.userSubscription = this.userService.currentUserState.subscribe(
      user => (this.user = user)
    );
  }
  onMenuBarBtnClicked() {
    this.menuBarTogglerEvent.emit();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
