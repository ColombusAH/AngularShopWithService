import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category.model';

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
