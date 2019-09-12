import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AddNewProductPageComponent } from './add-new-product-page/add-new-product-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details-page/product-details.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { NgbdModalProductFormComponent } from './ngbd-modal-product-form/ngbd-modal-product-form.component';
import { SharedModule } from '../shared/shared.module';
import { EditProductIconComponent } from './edit-product-icon/edit-product-icon.component';

@NgModule({
  declarations: [
    AddNewProductPageComponent,
    ProductsPageComponent,
    ProductsListComponent,
    ProductComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    CategorySelectorComponent,
    NgbdModalProductFormComponent,
    EditProductIconComponent
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule]
})
export class ProductsModule {}
