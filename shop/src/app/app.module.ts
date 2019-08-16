import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { HomeComponent } from './home-page/home.component';
import { AboutComponent } from './about-page/about.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SocialLinkComponent } from './social-link/social-link.component';

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
    SocialLinkComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
