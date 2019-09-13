import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { UserService } from './services/user.service';
import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { LocalizationService } from './services/localization.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    LocalizationService,
    ProductsService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
  ]
})
export class CoreModule {}
