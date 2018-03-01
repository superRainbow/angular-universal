import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleAnalyticsEventsService } from '../../service/google-analytics-events.service';

/**
 * 共用元件：上方 header
 * @export
 * @class HeaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') menu;

  showNav = false;
  scrollTop = true;
  navArray = [
    {
      name: '服務',
      url: '/service'
    },
    {
      name: '案例',
      url: '/case'
    },
    {
      name: '關於',
      url: '/about-us'
    },
    {
      name: '聯繫',
      url: '/contact-us'
    }
  ];
  constructor(
    public el: ElementRef,
    private router: Router,
    private googleAnalyticsEventsService: GoogleAnalyticsEventsService
  ) { }

  ngOnInit() {}

  /**
   * 顯示小版 menu
   */
  showMenu() {
    this.showNav = !this.showNav;
  }

  /**
   * windeow scroll 監視
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      this.scrollTop = false;
    }else {
      this.scrollTop = true;
    }
  }

  /**
   * 裝置效果
   */
  mobileEvent(item) {
    this.showMenu();
    this.menu.nativeElement.checked = !this.menu.nativeElement.checked;
    this.googleAnalyticsEventsService.emitEvent('點擊Top區域', '點擊導覽動作', `點擊(${item.name})`, null);
  }
}
