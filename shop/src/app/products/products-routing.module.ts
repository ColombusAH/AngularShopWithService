import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details-page/product-details.component';
import { AddNewProductPageComponent } from './add-new-product-page/add-new-product-page.component';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';
import { ProductsPageComponent } from './products-page/products-page.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductsPageComponent
  },

  { path: 'details/:id', component: ProductDetailsComponent },
  {
    path: 'addNewProduct',
    component: AddNewProductPageComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
