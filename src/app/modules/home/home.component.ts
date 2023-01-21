import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { delay, map } from 'rxjs';
import { ProductsService } from '../products/products.service';
import { MessageBandService } from '../shared/layout/message-band/message-band.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  featuredProducts$ = this.productsService.productQuickViews$.pipe(
    map(quickViews => quickViews.slice(0, 5))
  );

  productSlides$ = this.productsService.productSlides$.pipe(
    delay(2000),
    map(productSlides => productSlides.slice(0, 5))
  );

  message?: string = 'Messages will be displayed. Example: Offers etc.';

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  displayProgressSpinner = false;
  spinnerWithoutBackdrop = false;

  constructor(private messageBandService: MessageBandService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.messageBandService.messageSubject.next(this.message);
    this.messageBandService.showMessageSubject.next(true);
  }

  ngOnDestroy(): void {
    this.messageBandService.showMessageSubject.next(false);
  }

}
