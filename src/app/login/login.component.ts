import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../utils/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [ AuthService ]
})
export class LoginComponent implements OnInit, OnDestroy {
	
	private sub:any;
	
	constructor(
		private auth:AuthService,
		private route:ActivatedRoute
	) { }

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe( params => {
			let code = params['code'];
			let token;
			if (code) {
				this.auth.generateToken(code).subscribe(
					data => {
						let token = data['access_token'];
						this.auth.setToken(token);
						this.redirectToOrientadorPage();
					},
					(err: HttpErrorResponse) => {
						if (err.error instanceof Error) {
							// A client-side or network error occurred. Handle it accordingly.
							console.log('An error occurred:', err.error.message);
						} else {
							// The backend returned an unsuccessful response code.
							// The response body may contain clues as to what went wrong,
							console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
						}
					}
				)
				//
			} else {
				this.auth.redirectToLoginPage();
			}
		});
	}
	
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	
	// @TODO use angular mechanics
	redirectToOrientadorPage() {
		window.location.href = environment.localhost + '/orientador';
	}

}
