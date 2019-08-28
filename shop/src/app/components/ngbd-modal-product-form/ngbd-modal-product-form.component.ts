import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-product-form',
  templateUrl: './ngbd-modal-product-form.component.html',
  styleUrls: ['./ngbd-modal-product-form.component.css']
})
export class NgbdModalProductFormComponent implements OnInit {
  @Input() product: Product;
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(result => {}, reason => {});
  }
  ngOnInit() {}
}
