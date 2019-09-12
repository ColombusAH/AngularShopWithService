import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { AboutComponent } from './pages/about-page/about.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { productRoutes } from './products/products-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'products', children: productRoutes },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'cart',
    loadChildren: () =>
      import('src/app/cart/cart.module').then(m => m.CartModule)
  },
  { path: 'login', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
