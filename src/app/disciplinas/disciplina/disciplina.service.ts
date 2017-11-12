import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

/* @TODO
interface Discipilna {}
*/
@Injectable()
export class DisciplinaService {
	
	constructor(private http: HttpClient) {}
	
	getDisciplina(codigo:string) {
		// requisita a api local
		this.http.get(environment.hostname + '/disciplinas/' + codigo).subscribe(
		  data => {
				console.log(data);
				//return data;
		  },
		  (err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
				  // A client-side or network error occurred. Handle it accordingly.
				  console.log('An error occurred:', err.error.message);
				  //return null;
				} else {
				  // The backend returned an unsuccessful response code.
				  // The response body may contain clues as to what went wrong,
				  console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
				  //return null;
				}
			}
		);
	}
}