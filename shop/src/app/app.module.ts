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
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { HomeComponent } from './pages/home-page/home.component';
import { AboutComponent } from './pages/about-page/about.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

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
    CarousselComponent,
    HomeComponent,
    AboutComponent,
    ProductsPageComponent,
    ContactPageComponent,
    SocialLinkComponent,
    CartPageComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
