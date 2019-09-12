import { Product } from './product.model';
export class ProductItem {
  constructor(public product: Product, public quantity: number = 1) {}
}
