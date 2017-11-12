import { Component, OnInit,HostListener,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public navIsFixed: boolean = false;
  isIn = true;   // store state

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

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
