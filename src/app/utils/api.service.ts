import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment'

import { Disciplina, Discente, Turma } from './interfaces';

@Injectable()
export class ApiService {

	constructor(
		private http:HttpClient,
	) { }
	
	getDisciplina(codigo:string):Observable<Disciplina> {
		let server_url = environment.localhost;
		return this.http.get(`${server_url}/api/disciplinas/${codigo}`);
	}
	
	getSemestres():Observable<Discente> {
		let server_url = environment.localhost;
		let body = {
			token: this.getToken()
		}
		return this.http.post(server_url + '/api/user/turmas',body);
	}
	
	private getToken():string {
		return window.localStorage.getItem('token');
	}
}
