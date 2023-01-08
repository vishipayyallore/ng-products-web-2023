import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { getSlidesFromProducts, IProduct } from './iproduct';
import { getQuickViewsFromProducts } from './product-quickview/iproduct-quickview';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = new BehaviorSubject<IProduct[]>([]);
  products$ = this.products.asObservable();

  productSlides$ = this.products.pipe(map(getSlidesFromProducts));
  productQuickViews$ = this.products.pipe(map(getQuickViewsFromProducts));

  constructor(private httpClient: HttpClient) { }

  getProducts(): void {

    console.log('ProductsService.getProducts()');
    // Get products from API and put into this.products
    this.httpClient.get<IProduct[]>('https://dummyjson.com/products?limit=10')
      .subscribe({
        next: (payload: any) => {
          console.log('ProductsService.getProducts() :: Next()');
          this.products.next(payload.products);
        },
        error: err => {
          console.warn(err);
        }
      });
  }

}
