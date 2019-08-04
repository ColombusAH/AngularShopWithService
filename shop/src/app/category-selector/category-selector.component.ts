import { Category } from './../../models/category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
  @Input() categoriesList: Category[];
  @Output() categorySelectedEvent = new EventEmitter<Category>();
  constructor() {}

  categorySelected(selectedCategory: Category) {
    console.log(selectedCategory);
  }
  ngOnInit() {}
}
