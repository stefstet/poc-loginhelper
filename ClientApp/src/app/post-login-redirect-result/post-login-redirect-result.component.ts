import { Component, OnInit } from '@angular/core';
import { RedirectParam } from './redirect-param';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-post-login-redirect-result',
  templateUrl: './post-login-redirect-result.component.html',
  styleUrls: ['./post-login-redirect-result.component.css']
})
export class PostLoginRedirectResultComponent implements OnInit {

  public redirectparams: RedirectParam[] = [];

  constructor(private router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        let hashFragment = s.url.split('#')[1];
        if (hashFragment != undefined){
          let parameters = hashFragment.split('&');
          parameters.forEach(x => {
            let parameter = x.split('=');
            this.redirectparams.push(new RedirectParam(parameter[0], parameter[1]))
          });
        }
      }
    });
  }

  ngOnInit() {
  }
}
