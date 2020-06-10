import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	router: string;

	constructor(public _router: Router) {}
	ngOnInit() {
		console.log(this.router)
	}

}

