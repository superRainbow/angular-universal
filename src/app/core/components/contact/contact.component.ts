import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
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
 * 共用元件：網頁下方的聯繫元件
 * @export
 * @class ContactComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  state = 'hide';

  constructor(
    private router: Router,
    public el: ElementRef,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) { }

  ngOnInit() {
  }

  /**
   * windeow scroll 監視
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      this.state = 'show';
    }
  }

  /**
   * 導頁
   * @param url
   */
  getRouterLink(url) {
    this.router.navigate([url]);
    this.googleAnalyticsEventsService.emitEvent('下方聯繫', 'click', '聯繫', 1);
  }
}
