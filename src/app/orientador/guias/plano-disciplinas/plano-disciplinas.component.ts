import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../../utils/api.service';
import { Turma } from '../../../utils/interfaces';

@Component({
  selector: 'app-plano-disciplinas',
  templateUrl: './plano-disciplinas.component.html',
  styleUrls: ['./plano-disciplinas.component.css'],
  providers: [ ApiService ]
})
export class PlanoDisciplinasComponent implements OnInit, OnDestroy {
	
	private turmas:any;
	private data_received:boolean;
	constructor(
		private api:ApiService
	){}
 
	ngOnInit() {
		this.api.getSemestres().subscribe(
			discente => {
				let turmas = discente.turmas;
				this.turmas = {};
				for( let turma of turmas ) {
					this.turmas[turma.ano.toString()] = {};
				}
				for( let turma of turmas ) {
					this.turmas[turma.ano.toString()][turma.periodo.toString()] = turma;
				}
				console.log(this.turmas);
				this.data_received = true;
			},
			(err: HttpErrorResponse) => {
				(err.error instanceof Error)?console.log('An error occurred:', err.error.message):console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
			}
		);
	}
	
	ngOnDestroy() {}
}