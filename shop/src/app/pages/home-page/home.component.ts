import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   productList: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productList = this.productService.getAllProducts();
  }
}
