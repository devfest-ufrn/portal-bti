import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrientadorComponent } from './orientador.component';
/*
const routes : Routes = [
  {
    path: '', pathMatch: 'full', component: OrientadorComponent,
    children: [
      {
        path: 'meus-semestres',
        component: MeusSemestresComponent
      }
    ]
  },
]
*/
@NgModule({
  imports: [
    CommonModule//RouterModule.forChild(routes)
  ],
  declarations: [
    OrientadorComponent
  ]//exports: [ RouterModule ]
})
export class OrientadorModule { }