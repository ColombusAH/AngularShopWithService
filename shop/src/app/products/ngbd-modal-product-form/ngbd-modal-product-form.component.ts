import { Product } from '../../core/models/product.model';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-product-form',
  templateUrl: './ngbd-modal-product-form.component.html',
  styleUrls: ['./ngbd-modal-product-form.component.css']
})
export class NgbdModalProductFormComponent {
  @Input() product: Product;
  constructor(private modalService: NgbModal) {}
  isDirty: boolean = false;
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(result => {}, reason => {});
  }

  setDirty(state: boolean) {
    this.isDirty = state;
  }
  canDeactivate() {
    if (this.isDirty) {
      const ans = confirm('are you sure?');
      if (ans) {
        this.modalService.dismissAll();
      }
    } else {
      this.modalService.dismissAll();
    }
  }
}
