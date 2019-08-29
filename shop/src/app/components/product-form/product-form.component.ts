import { Category } from './../../models/category.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];
  @Input() product: Product = null;
  @Output() formSubmitedEvent = new EventEmitter();
  initialCategoryValue: string;
  submited: boolean;

  constructor(fb: FormBuilder, private productService: ProductsService) {
    this.productForm = fb.group({
      category: ['', Validators.required],
      imageUrl: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required]
    });
  }

  priceNotValid(): boolean {
    const priceControl = this.productForm.controls['price'];
    return (
      priceControl.errors &&
      priceControl.errors.min &&
      (priceControl.touched || priceControl.dirty) &&
      !priceControl.errors.required
    );
  }

  haveError(name: string): boolean {
    const control = this.productForm.controls[name];
    return (
      control.errors &&
      control.errors.required &&
      (control.touched || control.dirty)
    );
  }

  ngOnInit() {
    this.categories = this.productService
      .getAllCategories()
      .filter(c => c.title.toLowerCase() !== 'all');

    this.initForm();
  }

  onSubmit() {
    const data = this.productForm.value;
    this.product.categoryId =
      data.category.id ||
      this.categories.find(c => c.title === this.initialCategoryValue).id;
    this.product.imageUrl = data.imageUrl;
    this.product.title = data.title;
    this.product.price = data.price;
    this.product.description = data.description;
    this.productService.addToproducts(this.product);
    this.formSubmitedEvent.emit();
    this.product = null;
    this.initForm();
    this.productForm.reset();
    this.submited = true;
  }

  initForm(): void {
    if (!this.product) {
      this.initialCategoryValue = 'Choose Category';
      this.product = new Product('', '', '', '', -1, '');
    } else {
      this.initialCategoryValue = this.categories.find(
        c => this.product.categoryId === c.id
      ).title;
      this.productForm.patchValue({
        category: this.initialCategoryValue,
        imageUrl: this.product.imageUrl,
        title: this.product.title,
        price: this.product.price,
        description: this.product.description
      });
    }

    this.submited = false;
  }
}
