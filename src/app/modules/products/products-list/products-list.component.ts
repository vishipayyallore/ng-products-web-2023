import { Component } from '@angular/core';
import { IProductQuickView } from '~/app/modules/products/product-quickview/iproduct-quickview';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  constructor(public productsService: ProductsService) { 
  }

}
