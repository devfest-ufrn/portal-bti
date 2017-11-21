import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { Disciplina } from './disciplina.interface';

@Injectable()
export class DisciplinaService {
	
	private disciplina:Disciplina;
	
	constructor(private http:HttpClient) {}
	
	getDisciplina(codigo:string):Observable<Disciplina> {
		// requisita a api local
		return this.http.get(environment.hostname + '/disciplinas/' + codigo)
	}
}