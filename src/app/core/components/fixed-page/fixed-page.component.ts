import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

/**
 * 共用元件：右下方的捷徑元件
 * @export
 * @class FixedPageComponent
 * @implements {OnInit}
 */
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

  /**
   * 導頁
   * @param url
   */
  getRouterLink(url) {
    this.router.navigate([url]);
  }

  /**
   * 滑到最上方動畫
   */
  scrollTop() {
    $('body, html').animate({'scrollTop' : 0}, 500);
  }

}
