import { ICategory } from '../../core/models/category.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent {
  @Input() categoriesList: ICategory[];
  @Output() categorySelectedEvent = new EventEmitter<ICategory>();
  isFirst = true;
  constructor() {}

  categorySelected(selectedCategory: ICategory) {
    this.categorySelectedEvent.emit(selectedCategory);
    this.isFirst = false;
  }
}
