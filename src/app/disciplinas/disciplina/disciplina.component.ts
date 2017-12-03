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
	private retornou_erro:boolean;
	private error_msg: string;
	
	constructor(
		private api:ApiService,
		private route:ActivatedRoute
	) {}
 
	ngOnInit() {
		this.sub = this.route.params.subscribe(
			params => {
				this.codigo = params.codigo;
				this.data_received = false;
				this.retornou_erro = false;
				this.api.getDisciplina(this.codigo).subscribe(
					data => {
						this.disciplina = data;
						this.data_received = true;
						this.retornou_erro = false;
					},
					(err: HttpErrorResponse) => {
						this.retornou_erro = true;
						if (err.error instanceof Error) {
							this.error_msg = err.error.message;
							console.log('An error occurred:', err.error.message);
						} else {
							this.error_msg = err.error;
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
