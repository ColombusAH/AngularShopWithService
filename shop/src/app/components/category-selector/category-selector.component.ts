import { Category } from '../../../models/category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent {
  @Input() categoriesList: Category[];
  @Output() categorySelectedEvent = new EventEmitter<Category>();
  isFirst = true;
  constructor() {}

  categorySelected(selectedCategory: Category) {
    this.categorySelectedEvent.emit(selectedCategory);
    this.isFirst = false;
  }
}
