import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { GoogleAnalyticsEventsService } from '../../service/google-analytics-events.service';

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

  @Input() options: any;
  hideMail = false;
  constructor(
    public el: ElementRef,
    private router: Router,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) { }

  ngOnInit() {
    if (this.options && this.options.hideMail) {
      this.hideMail = this.options.hideMail;
    }
  }

  /**
   * 導頁
   * @param url
   */
  getRouterLink(url) {
    this.router.navigate([url]);
    this.googleAnalyticsEventsService.emitEvent('點擊Foot區域', '點擊聯繫動作', '點擊(信封)', null);
  }

  /**
   * 滑到最上方動畫
   */
  scrollTop() {
    $('body, html').animate({'scrollTop' : 0}, 500);
  }

}
