import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourComponent } from './tour.component';

import { TourStartComponent } from './tour-start/tour-start.component';
import { CursoComponent } from './curso/curso.component';
import { IngressoComponent } from './ingresso/ingresso.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { EnfaseComponent } from './enfase/enfase.component';
import { CiclosComponent } from './ciclos/ciclos.component';
//shared modules
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ],
  declarations: [
    TourComponent,
    TourStartComponent,
    CursoComponent,
    IngressoComponent,
    ConteudoComponent,
    EnfaseComponent,
    CiclosComponent
  ]
})
export class TourModule {
  
}
