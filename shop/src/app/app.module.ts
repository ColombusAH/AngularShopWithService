import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HomeComponent } from './pages/home-page/home.component';
import { AboutComponent } from './pages/about-page/about.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ShoppingListProductAdderRemoverComponent } from './components/shopping-list-product-adder-remover/shopping-list-product-adder-remover.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateEditProductPageComponent } from './pages/create-edit-product-page/create-edit-product-page.component';
import { ShowIfPermissionDirective } from './directives/show-if-permission.directive';
import { EditProductIconComponent } from './components/edit-product-icon/edit-product-icon.component';
import { NgbdModalConfirmComponent } from './components/ngbd-modal-confirm/ngbd-modal-confirm.component';
import { NgbdModalProductFormComponent } from './components/ngbd-modal-product-form/ngbd-modal-product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductComponent,
    SidebarMenuComponent,
    CategorySelectorComponent,
    SummaryPipe,
    ProductDetailsComponent,
    HomeComponent,
    AboutComponent,
    ProductsPageComponent,
    ContactPageComponent,
    SocialLinkComponent,
    CartPageComponent,
    ShoppingListProductAdderRemoverComponent,
    CarousselComponent,
    LoginPageComponent,
    CreateEditProductPageComponent,
    ShowIfPermissionDirective,
    EditProductIconComponent,
    NgbdModalConfirmComponent,
    NgbdModalConfirmComponent,
    NgbdModalProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
