import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { HomeModule } from './home/home.module';
import { TourModule } from './tour/tour.module';
import { EstagiosModule } from './estagios/estagios.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EstagiosComponent } from './estagios/estagios.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';
import { EnfasesComponent } from './enfases/enfases.component';
import { OrientadorComponent } from './orientador/orientador.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    EstagiosComponent,
    CurriculosComponent,
    DisciplinasComponent,
    DisciplinaComponent,
    EnfasesComponent,
    EstagiosComponent,
    OrientadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TourModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }