import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-fixed-page',
  templateUrl: './fixed-page.component.html',
  styleUrls: ['./fixed-page.component.scss']
})
export class FixedPageComponent implements OnInit {
  constructor(
    public el: ElementRef,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getRouterLink(url) {
    this.router.navigate([url]);
  }

  scrollTop() {
    // window.scrollTo(0, 0);
    $('body, html').animate({'scrollTop' : 0}, 500);
  }

}
