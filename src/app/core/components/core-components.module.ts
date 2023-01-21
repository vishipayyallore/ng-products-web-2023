import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';
import { SpinnerStructuralComponent } from './spinner/spinner-structural/spinner-structural.component';
import { SpinnerOverlayComponent } from './spinner/spinner-overlay/spinner-overlay.component';

const components = [
  SpinnerOverlayComponent,
  SpinnerStructuralComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    NgmaterialModule
  ]
})
export class CoreComponentsModule { }
