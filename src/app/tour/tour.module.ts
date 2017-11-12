import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourComponent } from './tour.component';

import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { CursoComponent } from './curso/curso.component';
import { IngressoComponent } from './ingresso/ingresso.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { EnfaseComponent } from './enfase/enfase.component';
import { CiclosComponent } from './ciclos/ciclos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TourComponent,
    BoasVindasComponent,
    CursoComponent,
    IngressoComponent,
    ConteudoComponent,
    EnfaseComponent,
    CiclosComponent
  ]
})
export class TourModule {
  
}
