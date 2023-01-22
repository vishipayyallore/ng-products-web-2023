import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, UrlTree } from '@angular/router';
import { delay, finalize, first, firstValueFrom, Observable, of } from 'rxjs';

import { AppService } from '~/app/app.service';
import { ProductsService } from '~/app/modules/products/products.service';
import { ILoadingGuard } from './ILoadingGuard';

@Injectable({
  providedIn: 'root'
})
export class LoadingGuard implements CanMatch {

  private productsService!: ILoadingGuard;

  constructor(private appService: AppService, productsService: ProductsService) {
    this.productsService = productsService;
  }

  async canMatch(_route: Route, _segments: UrlSegment[]) {

    if (await firstValueFrom(this.productsService.isLoading$)) {
      this.appService.spinner.next(true);

      await this.productsService.isLoading$.pipe(first((isLoading) => {
        return isLoading;
      }));

      this.appService.spinner.next(false);
    }

    return true;
  }

}
