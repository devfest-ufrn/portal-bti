import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../utils/auth.service';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.css'],
  providers: [ AuthService ]
})
export class BoasVindasComponent implements OnInit {
  
  constructor(private auth:AuthService){}

  ngOnInit(){}
  
  // click on login button
  redirect() {
    this.auth.redirectToLoginPage();
  }

}
