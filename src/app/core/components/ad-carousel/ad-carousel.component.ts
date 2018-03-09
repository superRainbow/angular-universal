import { ElementRef, Input, Component, Output,
  OnInit, AfterViewInit, AfterViewChecked, OnDestroy,
  NgZone, EventEmitter } from '@angular/core';

/**
 * 共用元件：廣告輪播
 * @export
 * @class AdCarouselComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {AfterViewChecked}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-ad-carousel',
  templateUrl: './ad-carousel.component.html',
  styleUrls: ['./ad-carousel.component.scss']
})

export class AdCarouselComponent implements OnInit, AfterViewInit, AfterViewChecked , OnDestroy {

  /** 輪播元件接收的設定物件 */
  @Input() options: any;
  /** 輪播元件接收的資料物件 */
  @Input() data: any;
  /** 輸播元件點選事件 */
  @Output() linkEvent = new EventEmitter();
  oldData;
  $carouselElement: any;

  /** 輪播元件預設的設定物件 */
  defaultOptions: any = {
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
  };

  constructor(
    private el: ElementRef,
    private ngZone:  NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.data.length > 0) {
      this.options = Object.assign({}, this.defaultOptions, this.options);
      this.ngZone.runOutsideAngular(() => {
        this.$carouselElement = $(this.el.nativeElement).find('.owl-carousel').owlCarousel(this.options);
        this.oldData = this.data;
      });
      $(this.el.nativeElement).on('click', '.owl-carousel .link', (e) => {
          const nowIndex = e.currentTarget.getAttribute('data-item');
          const nowData = this.data[nowIndex];
          this.doLink(nowData);
      });
    }

  }

  ngAfterViewChecked() {
    if (this.oldData !== this.data) {
      this.ngOnDestroy();
      this.ngAfterViewInit();
      this.oldData = this.data;
    }
  }

  ngOnDestroy() {
    if (this.$carouselElement) {
      this.ngZone.runOutsideAngular(() => {
        $(this.el.nativeElement).find('.owl-stage').parent().remove();
        $(this.el.nativeElement).find('.owl-item').remove();
        this.$carouselElement.trigger('destroy.owl.carousel');
      });
      this.$carouselElement = null;
    }
  }

  /**
   * 使用者按下輪播項目
   * @param {any} item
   */
  doLink(item) {
    this.linkEvent.emit(item);
  }
}
