import { UserService } from './services/user.service';
import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { LocalizationService } from './services/localization.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [LocalizationService, ProductsService, UserService]
})
export class CoreModule {}
