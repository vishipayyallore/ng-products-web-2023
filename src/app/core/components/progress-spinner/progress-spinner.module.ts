import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';



@NgModule({
  declarations: [
    ProgressSpinnerComponent
  ],
  exports: [
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgmaterialModule
  ]
})
export class ProgressSpinnerModule { }
