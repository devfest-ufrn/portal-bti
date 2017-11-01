import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalDiscenteComponent } from './portal-discente/portal-discente.component';
import { PortalDiscenteModule } from './portal-discente/portal-discente.module';


@NgModule({
  declarations: [
    AppComponent,
    PortalDiscenteComponent
  ],
  imports: [
    BrowserModule,
    PortalDiscenteModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }