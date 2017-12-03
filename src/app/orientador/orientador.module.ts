import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrientadorComponent } from './orientador.component';
import { MeusSemestresComponent } from './guias/meus-semestres/meus-semestres.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrientadorComponent,
    MeusSemestresComponent
  ]
})
export class OrientadorModule { }