import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartRoutingModule } from './cart-routing.module';
import { ProductDetailsCartComponent } from './product-details-cart/product-details-cart.component';

@NgModule({
  declarations: [CartPageComponent, ProductDetailsCartComponent],
  imports: [ CartRoutingModule, SharedModule]
})
export class CartModule {}
