import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';
import { SpinnerStructuralComponent } from './spinner/spinner-structural/spinner-structural.component';
import { SpinnerOverlayComponent } from './spinner/spinner-overlay/spinner-overlay.component';
import { SpinnerDirective } from './spinner/spinner.directive';

const components = [
  SpinnerOverlayComponent,
  SpinnerStructuralComponent,
  SpinnerDirective
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
