import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductDetailsCartComponent } from './product-details-cart/product-details-cart.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'details/:id',
        pathMatch: 'full',
        component: ProductDetailsCartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
