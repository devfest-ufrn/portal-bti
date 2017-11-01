import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumoComponent } from './resumo/resumo.component';
import { EnfasesComponent } from './enfases/enfases.component';
import { EstagiosComponent } from './estagios/estagios.component';
import { ServicosComponent } from './servicos/servicos.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoasVindasComponent,
    ResumoComponent,
    EnfasesComponent,
    EstagiosComponent,
    ServicosComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    BoasVindasComponent,
    ResumoComponent,
    EnfasesComponent,
    EstagiosComponent,
    ServicosComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class PortalDiscenteModule {
}
