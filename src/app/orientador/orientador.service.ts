import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class OrientadorService {

	constructor(
	    private http:HttpClient,
    ) {}
    
    
    getMatricula() {
        //const api = environment.api_sinfo_credencials;
        
        //return this.http.get(`${api.url}/matricula/v0.1/semestres-cursados`);
    }
}