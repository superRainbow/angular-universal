import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
      url: '/eee'
    },
    {
      name: '關於',
      url: '/www'
    },
    {
      name: '聯繫',
      url: '/contact-us'
    }
  ];
  constructor(
    public el: ElementRef,
    private router: Router
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
   * 轉頁
   * @param url
   */
  goPage(url) {
    this.router.navigate([url]);
    this.showMenu();
    this.menu.nativeElement.checked = !this.menu.nativeElement.checked;
  }
}
