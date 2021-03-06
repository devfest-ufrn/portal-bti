import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { TourModule } from './tour/tour.module';
import { MuralModule } from './mural/mural.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MuralComponent } from './mural/mural.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';
import { EnfasesComponent } from './enfases/enfases.component';
import { OrientadorComponent } from './orientador/orientador.component';
import { MeusSemestresComponent } from './orientador/guias/meus-semestres/meus-semestres.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MuralComponent,
    CurriculosComponent,
    DisciplinasComponent,
    DisciplinaComponent,
    EnfasesComponent,
    MuralComponent,
    LoginComponent,
    OrientadorComponent,
    MeusSemestresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NavbarModule,
    FooterModule,
    TourModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }