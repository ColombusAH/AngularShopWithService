import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-product-page',
  templateUrl: './add-new-product-page.component.html',
  styleUrls: ['./add-new-product-page.component.css']
})
export class AddNewProductPageComponent {
  dirtyForm: boolean = false;

  constructor(private location: Location) {}

  backButtonClicked() {
    this.location.back();
  }

  setDirty(state: boolean) {
    this.dirtyForm = state;
  }

  canDeactivate() {
    if (this.dirtyForm) {
      return confirm('Discard all Changes?');
    }
    return true;
  }
}
