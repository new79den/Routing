import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'roo-user',
  template: `<p>
  user works!
  </p>
  <a [routerLink]="['/user']">User</a>
  <!--<a [routerLink]="['../']">Home</a>-->
  <br>
  <button (click)="onNavigate()">Go home</button>
`,
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  onNavigate(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
