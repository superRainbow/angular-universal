import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root';

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let urlName = '';
        switch (event.urlAfterRedirects) {
          case '/service':
            urlName = '服務頁';
            break;
          case '/case/case-png':
            urlName = '案例頁';
            break;
          case '/about-us':
            urlName = '關於頁';
            break;
          case '/contact-us':
            urlName = '聯繫頁';
            break;
        }
        ga('set', 'page', urlName);
        ga('send', 'pageview');
      }
    });
  }
}
