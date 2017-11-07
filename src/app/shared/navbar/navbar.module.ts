import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";


import { NavbarComponent } from './navbar.component';
import { NavbarService } from './navbar.service';

@NgModule({
    imports: [ BrowserModule ],
	declarations: [ 
		NavbarComponent,
		SmoothScrollToDirective,
		SmoothScrollDirective 
	],
	exports: [ NavbarComponent ],
	providers: [ NavbarService ]
})
export class NavbarModule {
	
	
}
