import { ProductDetailsComponent } from './pages/product-details-page/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { AboutComponent } from './pages/about-page/about.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AddNewProductPageComponent } from './pages/add-new-product-page/add-new-product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductDetailsCartComponent } from './components/product-details-cart/product-details-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsPageComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent
  },
  { path: 'contact', component: ContactPageComponent },
  { path: 'addNewProduct', component: AddNewProductPageComponent },
  {
    path: 'cart',
    component: CartPageComponent,
    children: [{ path: 'detail/:id', component: ProductDetailsCartComponent }]
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
