import { Component, OnInit,HostListener,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class NavbarComponent implements OnInit {
  
  public navIsFixed: boolean = false;
  isIn = true;   // store state
  route: string;
  public nomes_menu:string[]= ["Inicio","Resumo","Ênfases","Estágios", "Outros Serviços"];
  public componentes:string[] = ["boas-vindas","resumo","enfases","estagios","servicos"];
  private sections:string[];
  
  constructor(@Inject(DOCUMENT) private document:Document  , private location:Location, private router:Router) {
     /*
     router.events.subscribe((val) => {
        if(location.path() != '/'){
          this.route = location.path();
        } else {
          this.route = 'Inicio'
        }
      });
      */    
      
  }
    
  ngOnInit() {
    /*
    this.router.events.subscribe((val) => {
      if(this.location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'Inicio'
      }
    });
    
    if(this.route == "Inicio") {
      this.nomes_menu = ["Inicio","Resumo","Ênfases","Estágios", "Outros Serviços"];
      this.componentes = ["boas-vindas","resumo","enfases","estagios","servicos"];
    }else{
      this.nomes_menu = [this.route,"eqeqwe","sdad","ewew", "wew"];
      this.componentes = ["boas-vindas","resumo","enfases","estagios","servicos"];
    }
    */
    
    
  }
  
 

  toggleState() { // click handler
    this.isIn = this.isIn === false ? true : false; 
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scroll =  document.documentElement.scrollTop || 0;
    const limit = 60;
    this.navIsFixed = (scroll > limit) ? true : false;
  }

}
