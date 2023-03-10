import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { NgmaterialModule } from './ngmaterial/ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './core/errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreComponentsModule } from './core/components/core-components.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgmaterialModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    CoreComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
