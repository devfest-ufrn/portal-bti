import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  constructor(private router: Router) {}
 
  ngOnInit() {}
  
  select(value) {
    this.router.navigate(['/disciplinas', value])
  }

}
