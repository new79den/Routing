import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roo-user',
  template: `<p>
  user works!
  </p>
  <a [routerLink]="['/user']">User</a>
  <!--<a [routerLink]="['../']">Home</a>-->
`,
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
