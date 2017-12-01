import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EstagiosComponent } from './estagios/estagios.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';
import { EnfasesComponent } from './enfases/enfases.component';
import { OrientadorComponent } from './orientador/orientador.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'tour', component: TourComponent },
	{ path: 'estagios',	component: EstagiosComponent },
	{ path: 'enfases', component: EnfasesComponent },
	{ path: 'curriculos',	component: CurriculosComponent },
	{ path: 'disciplinas', component: DisciplinasComponent,
			children:[{path:':codigo', component:DisciplinaComponent}]},
	{ path: 'orientador',	component: OrientadorComponent },
	{ path: '**',	component: NotFoundComponent }
];

@NgModule ({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	
}