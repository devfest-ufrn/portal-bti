import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../utils/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-authorize',
	templateUrl: './authorize.component.html',
	styleUrls: ['./authorize.component.css'],
	providers: [ AuthService ]
})
export class AuthorizeComponent implements OnInit, OnDestroy {
	
	private sub:any;
	
	constructor(
		private auth:AuthService,
		private router:Router,
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
							console.log('An error occurred:', err.error.message);
						} else {
							console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
							//codigo invalido
							this.auth.redirectToLoginPage();
						}
					}
				);
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
		this.router.navigate(['/orientador']);
		// window.location.href = environment.localhost + '/orientador';
	}

}
