import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { HomeRoutingModule } from './home-routing.module';
import { ProgressSpinnerModule } from '~/app/core/components/progress-spinner/progress-spinner.module';

const components = [
  HomeComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ProductsModule,
    ProgressSpinnerModule
  ]
})
export class HomeModule { }
