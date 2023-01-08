import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

const components = [
  ProgressSpinnerComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    NgmaterialModule
  ]
})
export class ProgressSpinnerModule { }
