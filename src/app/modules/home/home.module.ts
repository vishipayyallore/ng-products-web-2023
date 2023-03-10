import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { HomeRoutingModule } from './home-routing.module';
import { CoreComponentsModule } from '~/app/core/components/core-components.module';

const components = [
  HomeComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ProductsModule,
    CoreComponentsModule
  ]
})
export class HomeModule { }
