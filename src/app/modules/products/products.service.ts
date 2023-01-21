import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map } from 'rxjs';
import { ILoadingGuard } from '~/app/core/guards/ILoadingGuard';
import { getSlidesFromProducts, IProduct } from './iproduct';
import { getQuickViewsFromProducts } from './product-quickview/iproduct-quickview';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements ILoadingGuard {

  private products = new BehaviorSubject<IProduct[]>([]);
  products$ = this.products.asObservable();

  productSlides$ = this.products.pipe(map(getSlidesFromProducts));
  productQuickViews$ = this.products.pipe(map(getQuickViewsFromProducts));

  private isLoadingContent = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingContent.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProducts(): void {

    this.isLoadingContent.next(true);

    this.httpClient.get<IProduct[]>('https://dummyjson.com/products?limit=10')
      .pipe(
        delay(5000)
      )
      .subscribe({
        next: (payload: any) => {

          this.products.next(payload.products);
        },
        error: err => {
          console.warn(err);
        },
        complete: () => {
          this.isLoadingContent.next(false);
        }
      });
  }

}
