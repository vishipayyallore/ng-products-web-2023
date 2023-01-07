import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IProduct } from './products-list/iproduct.types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = new ReplaySubject<IProduct[]>(1);
  products$ = this.products.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProducts(): void {
    // Get products from API and put into this.products
    this.httpClient.get<IProduct[]>('https://dummyjson.com/products?limit=10')
      .subscribe({
        next: products => {
          this.products.next(products);
        },
        error: err => {
          console.warn(err);
        }
      });
  }

}
