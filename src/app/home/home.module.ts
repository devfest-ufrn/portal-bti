import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ResumoComponent } from './resumo/resumo.component';
import { EnfasesComponent } from './enfases/enfases.component';
import { EstagiosComponent } from './estagios/estagios.component';
import { ServicosComponent } from './servicos/servicos.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

// Shared modules
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  imports: [
		CommonModule,
		NavbarModule,
		FooterModule,
		RouterModule
  ],
	declarations: [
	  HomeComponent,
		BoasVindasComponent,
		ResumoComponent,
		EnfasesComponent,
		EstagiosComponent,
		ServicosComponent
  ]
})
export class HomeModule {}
