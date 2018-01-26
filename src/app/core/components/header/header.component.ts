import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.showNav = !this.showNav;
  }

}
