import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
  	BrowserModule,
  	RouterModule
	],
	declarations: [ 
		NavbarComponent,
		SmoothScrollToDirective,
		SmoothScrollDirective 
	],
	exports: [ NavbarComponent ]
})
export class NavbarModule {}
