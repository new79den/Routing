import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscribable} from "rxjs/Observable";

@Component({
  selector: 'roo-user',
  template: `<p>
  user works!
  </p>

  <br>
  <button (click)="onNavigate()">Go home</button>
  <hr>
  {{id}}
`,
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: any;
  id: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
   this.subscription = activatedRouter.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
