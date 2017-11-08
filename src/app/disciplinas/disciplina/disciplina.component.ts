import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaService } from './disciplina.service';

@Component({
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  
  public codigo: string;
  public dados: string;
  
  constructor(private disciplinaService:DisciplinaService, private route:ActivatedRoute) {}
 
  ngOnInit() {
    this.codigo = this.route.snapshot.params['codigo'];
    this.disciplinaService.getDisciplina(this.codigo);
    
    
  }
}
