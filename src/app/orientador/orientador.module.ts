import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrientadorComponent } from './orientador.component';
import { MeusSemestresComponent } from './guias/meus-semestres/meus-semestres.component';
import { PlanoDisciplinasComponent } from './guias/plano-disciplinas/plano-disciplinas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrientadorComponent,
    MeusSemestresComponent,
    PlanoDisciplinasComponent
  ]
})
export class OrientadorModule { }