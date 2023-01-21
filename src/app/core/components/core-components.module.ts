import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

const components: any[] = [
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
