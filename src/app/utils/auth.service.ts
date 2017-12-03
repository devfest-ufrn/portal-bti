import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Discente } from './interfaces';

@Injectable()
export class AuthService {

	constructor(
		private http:HttpClient,
	) { }
	
	getUserInfo():Observable<Discente> {
		let body = {
			token: this.getToken()
		}
		return this.http.post('/api/user/turmas_semestre_atual',body);
	}
	
	generateToken(code: String) {
		let api_sinfo = environment.api_sinfo_credencials;
		let server_url = environment.localhost;
		let current_url = window.location.hostname +':'+ window.location.port;
		console.log(current_url);
		let body = {
			redirect_uri: 'https://' + current_url + '/login',
			grant_type: 'authorization_code',
			code: code
		}
		return this.http.post(server_url + '/api/user/auth',body);
	}
	
	getToken(): string {
		return window.localStorage.getItem('token');
	}

	setToken(token: string):void {
		window.localStorage.setItem('token', token);
	}

	destroyToken() {
		window.localStorage.removeItem('token');
	}

	// redireciona o usuário para a página de login da sinfo
	// e retorna para a página: localhost:8080/login
	redirectToLoginPage() {
		const api_sinfo = environment.api_sinfo_credencials;
		const local_url = `https://${window.location.hostname}:${window.location.port}`;
		window.location.href = `${api_sinfo.url}/authz-server/oauth/authorize?client_id=${api_sinfo.client_id}&response_type=code&redirect_uri=${local_url}/login`
	}
	
	
}
