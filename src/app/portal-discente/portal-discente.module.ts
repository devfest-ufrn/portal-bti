import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalDiscenteComponent } from './portal-discente.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { EnfasesComponent } from './enfases/enfases.component';
import { EstagiosComponent } from './estagios/estagios.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PortalDiscenteComponent, ConteudoComponent, EnfasesComponent, EstagiosComponent, ServicesComponent, LoginComponent, FooterComponent, NavComponent]
  ,exports:[PortalDiscenteComponent]
})
export class PortalDiscenteModule { }
