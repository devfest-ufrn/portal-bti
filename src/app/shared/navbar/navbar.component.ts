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
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
        console.log(this.isIn);
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =  document.documentElement.scrollTop || 0;
    if (number >= 40 && this.navIsFixed == false) {
      this.navIsFixed = true;
    } else if (number < 40 && this.navIsFixed == true) {
      this.navIsFixed = false;
    }
    console.log(number);
  }

}
