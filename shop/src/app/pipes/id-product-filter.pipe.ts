import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'idProductFilter'
})
export class IdProductFilterPipe implements PipeTransform {
  transform(products: Product[], id: string): Product {
    if (products) {
      return products.find(p => p.id === id);
    }
    return null;
  }
}
