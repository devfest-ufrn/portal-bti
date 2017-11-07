import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  /* passar para a navbar */
  sections: string[] = ['Home','Resumo','Enfases','Estágios','Outros Serviços'];  
  
  constructor() { }

  ngOnInit() {
  }

}
