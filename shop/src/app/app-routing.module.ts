import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { AboutComponent } from './pages/about-page/about.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AddNewProductPageComponent } from './pages/add-new-product-page/add-new-product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductResolverGuard } from './guards/product-resolver.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsPageComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    resolve: { product: ProductResolverGuard }
  },
  { path: 'contact', component: ContactPageComponent },
  { path: 'addNewProduct', component: AddNewProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
