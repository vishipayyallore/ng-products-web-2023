import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductQuickviewComponent } from './product-quickview/product-quickview.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';
import { ProductsService } from './products.service';

const components = [
  ProductQuickviewComponent,
  ProductsListComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgmaterialModule,
    NgOptimizedImage,
  ]
})
export class ProductsModule {

  constructor(private productsService: ProductsService) {

    console.log('ProductsModule constructor');
    this.productsService.getProducts();
  }

}
