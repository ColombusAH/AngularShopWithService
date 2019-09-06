import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList$: Observable<Product[]>;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productList$ = this.productService.fetchAllProducts();
  }
}
