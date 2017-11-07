import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
/*
interface Discipilna {
  codigo: string,
  
}
*/
@Component({
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  
  public codigo: string;
  public dados: string;
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
 
  ngOnInit() {
    this.codigo = this.route.snapshot.params['codigo'];
    this.dados = "";
    this.http.get('https://portal-bti-giordanorn.c9users.io:8080/disciplinas/' + this.codigo).subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          this.dados = `Backend returned code ${err.status}, body was: ${err.error}`;
        }
      }
    );
  }
}
