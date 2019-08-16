import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() productList: Product[];

  constructor() {}

  ngOnInit() {}
}
