import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Discente } from '../utils/interfaces';
import { AuthService } from '../utils/auth.service';

@Component({
	selector: 'app-orientador',
	templateUrl: './orientador.component.html',
	styleUrls: ['./orientador.component.css'],
	providers: [ AuthService ]
})
export class OrientadorComponent implements OnInit {
	
	
	private isIn:boolean = false;   // store state
	private discente: Discente;
	private data_received:boolean = false;
	
	constructor(
		private auth:AuthService,
		private router:Router
	) {}

	ngOnInit() {
		this.auth.getUserInfo().subscribe(
			discente => {
				this.data_received = true;
				this.discente = discente;
			},
			(err: HttpErrorResponse) => {
				(err.error instanceof Error)?console.log('An error occurred:', err.error.message):console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
			}
		);
	}
	
	toggleState() { // click handler
		this.isIn = this.isIn === false ? true : false; 
	}
	
}
