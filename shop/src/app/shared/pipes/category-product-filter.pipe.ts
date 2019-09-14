import { ICategory } from 'src/app/core/models/category.model';
import { Product } from 'src/app/core/models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryProductFilter'
})
export class CategoryProductFilterPipe implements PipeTransform {
  transform(products: Product[], category: ICategory): Product[] {
    if (products) {
      return products.filter(
        p =>
          category.title.toLowerCase() === 'all' || p.categoryId === category.id
      );
    }
    return products;
  }
}
