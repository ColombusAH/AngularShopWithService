import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly _productList: Product[];
  private readonly _categoriesList: Category[];
  constructor() {
    this._categoriesList = [
      new Category('0', 'All'),
      new Category('1', 'man'),
      new Category('2', 'woman')
    ];

    this._productList = [
      new Product(
        '1',
        '1',
        'assets/products/brown-man.jpeg',
        'man brown',
        700,
        'Brown fancy watch for special dinner'
      ),
      new Product(
        '2',
        '1',
        'assets/products/elegant-black.jpeg',
        'elegant black',
        500,
        'Elegant black solid watch '
      ),
      new Product(
        '3',
        '1',
        'assets/products/gold-man.jpeg',
        'golden',
        1590,
        'Beautiful Golden watch aviation style'
      ),
      new Product(
        '4',
        '1',
        'assets/products/guess-man.jpeg',
        'Guess',
        1200,
        'Beautiful Guess watch '
      ),
      new Product(
        '5',
        '1',
        'assets/products/silver-geneva-man.jpeg',
        'Geneva watch',
        1150,
        'beautiful silver watch from Geneva'
      ),
      new Product(
        '6',
        '1',
        'assets/products/silver-man.jpeg',
        'Omega silver',
        1300,
        'Omega silver Omega watch '
      ),
      new Product(
        '7',
        '2',
        'assets/products/black-teenager-woman.jpeg',
        'Teenager watch',
        400,
        'Teenager fancy watch '
      ),
      new Product(
        '8',
        '2',
        'assets/products/brown-classic-woman.jpeg',
        'Brown classic woman watch',
        800,
        'Beautiful brown classic simple watch  '
      ),
      new Product(
        '9',
        '2',
        'assets/products/classic-analogg-woman.jpeg',
        'Ligth brown woman watch',
        900,
        'Analog watch with light brown color '
      ),
      new Product(
        '10',
        '2',
        'assets/products/digital-rose-gold-woman.jpeg',
        'Rose golden digatl watch',
        650,
        'Beautiful rose golden  watch for woman '
      ),
      new Product(
        '11',
        '2',
        'assets/products/gloden-diamant-woman.jpeg',
        'Golden Diamant',
        650,
        'Perfect golden diamant watch  '
      ),
      new Product(
        '12',
        '2',
        'assets/products/gloden-woman.jpeg',
        'Golden watch ',
        650,
        'Golden elegant woman watch  '
      ),
      new Product(
        '13',
        '2',
        'assets/products/golden-white-woman.jpeg',
        'Golden white',
        650,
        'Golden white analog watch form woman'
      ),
      new Product(
        '14',
        '2',
        'assets/products/vintage-woman.jpeg',
        'Wintage golden ',
        650,
        'Beautiful wintage brown golden watch '
      ),
      new Product(
        '15',
        '1',
        'assets/products/brown-alcadus-man.jpeg',
        'brown alcadus',
        800,
        'Analog brown colored watch with beautifull contour'
      ),
      new Product(
        '16',
        '1',
        'assets/products/black-smart-man.jpeg',
        'black smart',
        1100,
        'Digital black smart watch'
      ),
      new Product(
        '17',
        '1',
        'assets/products/brown-classic-man.jpeg',
        'classic brown',
        1200,
        'A classic brown design for elegant fit'
      )
    ];
  }
  getAllProducts(): Product[] {
    return this._productList;
  }

  getProductsByCategory(category: Category): Product[] {
    if (category.title.toLowerCase() !== 'all') {
      return this._productList.filter(
        p => p.categoryId.localeCompare(category.id) === 0
      );
    }
    return this.getAllProducts();
  }

  getAllCategories() {
    return this._categoriesList;
  }

  addToproducts(product: Product) {
    const index = this._productList.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this._productList[index] = product;
    } else {
      product.id = this._productList.length + '';
      this._productList.push(product);
    }
  }
}
