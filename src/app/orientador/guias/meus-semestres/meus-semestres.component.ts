import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../../utils/api.service';
import { Turma } from '../../../utils/interfaces';

@Component({
  selector: 'app-meus-semestres',
  templateUrl: './meus-semestres.component.html',
  styleUrls: ['./meus-semestres.component.css'],
  providers: [ ApiService ]
})
export class MeusSemestresComponent implements OnInit, OnDestroy {
	
	private turmas:any;
	// private turmas_2:Turma[][];
	private data_received:boolean = false;
	

	constructor(
		private api:ApiService
	){}
 
	ngOnInit() {
		this.api.getSemestres().subscribe(
			discente => {
				let turmas = discente.turmas;
				this.turmas = {};
				for( let turma of turmas ) {
					this.turmas[turma.ano] = {};
				}
				for( let turma of turmas ) {
					this.turmas[turma.ano][turma.periodo] = turma;
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