import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-orientador',
  templateUrl: './orientador.component.html',
  styleUrls: ['./orientador.component.css'],
  providers: [ AuthService ]
})
export class OrientadorComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getUserInfo().subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        (err.error instanceof Error)?console.log('An error occurred:', err.error.message):console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
			}
		);
  }

}
