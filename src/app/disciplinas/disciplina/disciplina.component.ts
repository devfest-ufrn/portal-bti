import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../utils/api.service';
import { Disciplina } from '../../utils/interfaces';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
	templateUrl: './disciplina.component.html',
	styleUrls: ['./disciplina.component.css'],
	providers: [ ApiService ]
})
export class DisciplinaComponent implements OnInit, OnDestroy {
	
	private sub: any;
	private codigo: string;
	private disciplina: Disciplina;
	private data_received:boolean;
	
	constructor(
		private api:ApiService,
		private route:ActivatedRoute
	){}
 
	ngOnInit() {
		this.sub = this.route.params.subscribe(
			params => {
				this.codigo = params.codigo;
				this.data_received = false;
				this.api.getDisciplina(this.codigo).subscribe(
					data => {
						this.disciplina = data;
						this.data_received = true;
					},
					(err: HttpErrorResponse) => {
						if (err.error instanceof Error) {
							console.log('An error occurred:', err.error.message);
						} else {
							console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
						}
					}
				)
			}
		)
	}
	
	ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
