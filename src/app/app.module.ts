import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalDiscenteModule } from './portal-discente/portal-discente.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalDiscenteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
