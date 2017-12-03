import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Aluno } from '../aluno';
import { AuthService } from '../shared/services/auth.service';



@Component({
  selector: 'app-orientador',
  templateUrl: './orientador.component.html',
  styleUrls: ['./orientador.component.css'],
  providers: [ AuthService ]
})
export class OrientadorComponent implements OnInit {
    isIn = false;   // store state
    Aluno: any;

    constructor(
      private auth:AuthService,
      private router:Router
    ) {}

    ngOnInit() {

      this.auth.getUserInfo().subscribe(
      discente => {
        if (discente !== null ) {
          console.log(discente);
          this.Aluno = new Aluno(discente['cpf'],discente['nome'],discente['id_discente'],discente['username'],discente['semestre'],discente['turmas']);
        }
      
        /* @TODO manipula esses dados e joga na tela
          cpf,
          id_discente,
          username,
          nome,
          semestre: ano, periodo,
          turmas[]: nome-componente, descricao-horario, codigo-componente, id-componente
        */
        
      },
      (err: HttpErrorResponse) => {
        (err.error instanceof Error)?console.log('An error occurred:', err.error.message):console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
			}
		);
		
  
    }
    toggleState() { // click handler
      this.isIn = this.isIn === false ? true : false; 
    }
    
    
    navigate(route:string) {
      //this.router.navigate([route]);
    }

}
