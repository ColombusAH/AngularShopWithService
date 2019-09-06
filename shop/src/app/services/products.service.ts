import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = 'assets/data';
  private readonly _categoriesList: Category[];
  private _Allproducts: Product[];
  private_products: Product[];
  private _productsSubject: BehaviorSubject<Product[]>;
  public readonly productsState$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this._productsSubject = new BehaviorSubject<Product[]>([]);
    this.productsState$ = this._productsSubject.asObservable();

    this._categoriesList = [
      new Category('0', 'All'),
      new Category('1', 'man'),
      new Category('2', 'woman')
    ];
  }

  // TODO: change implementation when integrate with real api
  fetchAllProducts(): Observable<Product[]> {
    if (this._productsSubject.value.length === 0) {
      this.http.get<Product[]>(this.baseUrl + '/products.json').subscribe(
        prods => {
          this._Allproducts = prods;
          this._productsSubject.next(prods);
        },
        error => this.handleError(error)
      );
    }
    return this.productsState$;
  }
  getAllCategories() {
    return this._categoriesList;
  }

  addToproducts(product: Product) {
    const index = this._Allproducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this._Allproducts[index] = product;
    } else {
      product.id = _.uniqueId('');
      this._Allproducts.push(product);
    }
    this._productsSubject.next(this._Allproducts);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
