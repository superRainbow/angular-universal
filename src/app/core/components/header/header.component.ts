import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

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
  showNav = false;
  scrollTop = true;
  navArray = [
    {
      name: '服務',
      url: ''
    },
    {
      name: '案例',
      url: ''
    },
    {
      name: '關於',
      url: ''
    },
    {
      name: '聯繫',
      url: ''
    }
  ];
  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  showMenu() {
    this.showNav = !this.showNav;
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        this.scrollTop = false;
      }else {
        this.scrollTop = true;
      }
    }
}
