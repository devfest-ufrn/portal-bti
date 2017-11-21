import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaService } from './disciplina.service';
import { Disciplina } from './disciplina.interface';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
	templateUrl: './disciplina.component.html',
	styleUrls: ['./disciplina.component.css'],
	providers: [{ provide: DisciplinaService, useClass: DisciplinaService }]
})
export class DisciplinaComponent implements OnInit, OnDestroy {
	
	private sub: any;
	private codigo: string;
	private disciplina: Disciplina;
	private data_received:boolean;
	
	constructor(
		private disciplinaService:DisciplinaService,
		private route:ActivatedRoute
	){}
 
	ngOnInit() {
		this.sub = this.route.params.subscribe( params => {
			this.codigo = params['codigo'];
			this.data_received = false;
			this.disciplinaService
				.getDisciplina(this.codigo)
				.subscribe(
					data => {
						this.disciplina = data;
						this.data_received = true;
					},
					(err: HttpErrorResponse) => {
						if (err.error instanceof Error) {
							// A client-side or network error occurred. Handle it accordingly.
							console.log('An error occurred:', err.error.message);
						} else {
							// The backend returned an unsuccessful response code.
							// The response body may contain clues as to what went wrong,
							console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
						}
					}
				)
			})
	}
	
	ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
