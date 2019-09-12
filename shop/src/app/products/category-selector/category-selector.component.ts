import { Category } from '../../core/models/category.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
