import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
    map(productSlides => productSlides.slice(0, 5))
  );

  message?: string = 'Messages will be displayed. Example: Offers etc.';

  constructor(private messageBandService: MessageBandService, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.messageBandService.messageSubject.next(this.message);
    this.messageBandService.showMessageSubject.next(true);
  }

  ngOnDestroy(): void {
    this.messageBandService.showMessageSubject.next(false);
  }

}
