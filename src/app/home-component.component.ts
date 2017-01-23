import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'roo-home-component',
  template: `<p>
  home component works!
  </p>
  <p>{{parpam}}</p>
`,
})
export class HomeComponent implements OnInit {
parpam : string ;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
