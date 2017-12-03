import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-meus-semestres',
  templateUrl: './meus-semestres.component.html',
  styleUrls: ['./meus-semestres.component.css']
})
export class MeusSemestresComponent implements OnInit, OnDestroy {
	
	
	constructor(		private route:ActivatedRoute	){}
 
	ngOnInit() {}
	
	ngOnDestroy() {}
}