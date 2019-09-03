import { Subscription } from 'rxjs';
import { UserService } from './../../services/user.service';
import { CartService } from './../../services/cart.service';
import { LanguageData } from './../../models/language.model';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnDestroy {
  @Input() isOpen: boolean;
  @Input() linksNames: string[];
  @Output() onCloseMenuBar = new EventEmitter();
  cartSize: number = 0;
  user: User;
  supportedLanguages: LanguageData[];
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private localizationService: LocalizationService,
    private cartService: CartService,
    private userService: UserService
  ) {
    this.supportedLanguages = this.localizationService.getAllSupportedLanguages();
    
    this.cartSubscription = this.cartService.shoppingListState.subscribe(
      cart => (this.cartSize = cart.size)
    );
    this.userSubscription = this.userService.currentUserState.subscribe(
      user => (this.user = user)
    );
  }

  closeMenuBar() {
    this.onCloseMenuBar.emit();
  }

  logout() {
    this.userService.logout();
    this.closeMenuBar();
  }

  languageSelected(event: Event) {
    const options = event.target['options'];
    const index = options.selectedIndex;
    this.localizationService.useLanguage(options[index].value);
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
