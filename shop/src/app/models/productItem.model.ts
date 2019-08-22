import { Product } from './product.model';
export class ProductItem {
  constructor(public prodcut: Product, public quantity: number = 0) {}
}
