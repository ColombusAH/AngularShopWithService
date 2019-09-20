import { AddConfirmationDirective } from './directives/add-confirmation.directive';
import { ShowIfPermissionDirective } from './directives/show-if-permission.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryProductFilterPipe } from './pipes/category-product-filter.pipe';
import { IdProductFilterPipe } from './pipes/id-product-filter.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialLinkComponent } from './layout/social-link/social-link.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ShoppingListProductAdderRemoverComponent } from './components/shopping-list-product-adder-remover/shopping-list-product-adder-remover.component';
import { NgbdModalConfirmComponent } from './components/ngbd-modal-confirm/ngbd-modal-confirm.component';
import { NgbdAlertCloseable } from './components/success-popup/success-popup.component';

@NgModule({
  declarations: [
    AddConfirmationDirective,
    ShowIfPermissionDirective,
    CategoryProductFilterPipe,
    IdProductFilterPipe,
    SummaryPipe,
    TranslatePipe,
    ShoppingListProductAdderRemoverComponent,
    NgbdModalConfirmComponent,
    NgbdAlertCloseable,
    SocialLinkComponent,
    HeaderComponent,
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    AddConfirmationDirective,
    ShowIfPermissionDirective,
    CategoryProductFilterPipe,
    IdProductFilterPipe,
    SummaryPipe,
    TranslatePipe,
    ShoppingListProductAdderRemoverComponent,
    NgbdModalConfirmComponent,
    HeaderComponent,
    SidebarMenuComponent,
    NgbdAlertCloseable,
    SocialLinkComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule
  ]
})
export class SharedModule {}
