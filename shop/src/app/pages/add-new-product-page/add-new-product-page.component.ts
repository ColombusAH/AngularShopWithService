import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-product-page',
  templateUrl: './add-new-product-page.component.html',
  styleUrls: ['./add-new-product-page.component.css']
})
export class AddNewProductPageComponent {
  @Output() backButtonClickedEvent = new EventEmitter();

  backButtonClicked() {
    this.backButtonClickedEvent.emit();
  }
}
