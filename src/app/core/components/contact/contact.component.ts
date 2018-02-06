import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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

  constructor(public el: ElementRef) { }

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
}
