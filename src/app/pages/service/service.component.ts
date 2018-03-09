import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import { WindowUtils } from '../../core/utils/window-utils.service';

/**
 * 服務頁面
 * @export
 * @class ServiceComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  stage1Style = '';
  stage2Config: Object;
  stage3Config: Object;
  stage4Config: Object;
  private stage2Anim: any;
  private stage3Anim: any;
  private stage4Anim: any;

  adData= [
    {
      imgKey: './assets/img/img_index_pic1.jpg',
      imgSmallKey: './assets/img/img_index_m_pic1.jpg'
    },
    {
      imgKey: './assets/img/img_index_pic2.jpg',
      imgSmallKey: './assets/img/img_index_m_pic2.jpg'
    },
    {
      imgKey: './assets/img/img_index_pic3.jpg',
      imgSmallKey: './assets/img/img_index_m_pic3.jpg'
    }
  ];
  adOptins= {
    nav: true,
    autoplayTimeout: 3000,
  };
  promiseList= [
    '從 2010 年來累積的豐富實戰經驗，提供您最佳的導入建議。',
    '藉由觀察實際作業現場，了解一線同仁的日常作業流程，量身打造最適合貴公司的輔銷平台。',
    '無論是 Android 或 iOS 平台，我們的團隊在開發及維運皆能成為您最佳的後援，支持貴公司全力推展業務。',
    '多年的介接經驗，我們會針對現有的系統環境提出異動最小的建議方案，降低導入的阻力。',
    '透過數據及報表的分析，讓您即時掌握同仁行程、安排同仁行程、最佳化作業流程，讓每一分錢的投入都能創造最大價值。'
  ];
  featuresList= [
    {
      class: 'icon-ic_statistics',
      title: '分析',
      des: [
        '分析報表'
      ]
    },
    {
      class: 'icon-ic_Integration',
      title: '整合',
      des: [
        '系統介接'
      ]
    },
    {
      class: 'icon-ic_management',
      title: '管理',
      des: [
        '行程管理',
        '任務管理',
        '產品資訊管理',
        '客戶資料管理'
      ]
    },
    {
      class: 'icon-icons8-megaphone',
      title: '公告',
      des: [
        '一般訊息',
        '推播訊息'
      ]
    },
    {
      class: 'icon-ic_gps',
      title: 'GPS',
      des: [
        '到達定位',
        '打卡定位',
        '人員定位',
        '照相定位'
      ]
    },
    {
      class: 'icon-ic_signature',
      title: '簽名',
      des: [
        '電子簽名',
        'QRcode操作'
      ]
    }
  ];
  stage1List= [
    {
      title: '需求訪談',
      des: '對客戶安排需求訪談作業，藉此進行蒐集、規劃，以確保工作產出滿足客戶所需。'
    },
    {
      title: '現場觀察作業流程',
      des: '至工作現場反覆觀察，瞭解使用者實務流程，最後透過行動裝置優化企業人員之作業步驟。'
    },
    {
      title: '系統分析',
      des: '將系統要素綜合分析，找出解決問題的可行方案或方法。並透過一定標準，有效的提出解決方案滿足客戶。'
    },
    {
      title: 'UI/UX 設計',
      des: '我們不僅關注於介面設計，更關心影響使用者的資訊架構、互動、認知、經驗與價值觀。不僅美化，並將操作體驗更臻完美。'
    }
  ];

  stage2Item= {
    title: '程式開發',
    des: 'Engineer 工程師依照需求擷取和規格製作，架構設計、邏輯設計、實作程式開發。'
  };
  stage3Item= {
    title: '客戶使用者驗證測試',
    des: '與客戶和目標使用者以「測試」、「確認」、「驗證」三大步驟一同 Demo 程式。'
  };
  stage4Item= {
    title: '問題討論或變動修改',
    des: '每一次的循環流程'
  };
  stage4List= [
    {
      class: 'icon-ic_cycle',
      des: '每次循環（階段）的週期大約兩個禮拜或三個禮拜。'
    },
    {
      class: 'icon-ic_trust_hand',
      des: '客戶團隊和開發團隊彼此信任和融入。'
    },
    {
      class: 'icon-ic_cooperation',
      des: '與客戶合作，正向回應開發過程中的任何變動。'
    }
  ];
  stage5Item= {
    title: 'Release 並進入下個階段',
    des: '完成並進入下一個工作階段或是工作順序，階段循環直到專案完成。'
  };

  constructor(
    private el: ElementRef,
    private window: WindowUtils
  ) {
    this.initAnimation();
  }

  ngOnInit() {
    this.window.scrollTop();
    this.initAnimation();
  }

  /**
   * 改變背景 style
   * @param i
   */
  changeBg(i) {
    this.stage1Style = 'stage1Bg-' + i;
  }

  /**
   * windeow scroll 監視
   */
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const $animation_elements = $('.animation');
    const stage2 = $(this.el.nativeElement).find('.stage2');
    const stage3 = $(this.el.nativeElement).find('.stage3');
    const stage4 = $(this.el.nativeElement).find('.stage4');
    const window_top_position = $(window).scrollTop();
    const window_bottom_position = ($(window).height() + $(window).scrollTop());

    if ((window_top_position + 900) >= stage2.offset().top) {
    // if (((stage2.offset().top + stage2.outerHeight()) >= window_top_position) && (stage2.offset().top <= window_bottom_position)) {
      this.stage2Anim.play();
    }
    if ((window_top_position + 900) >= stage3.offset().top) {
      this.stage3Anim.play();
    }
    if ((window_top_position + 900) >= stage4.offset().top) {
      this.stage4Anim.play();
    }

    $.each($animation_elements, function() {
      const $element = $(this);
      const element_height = $element.outerHeight();
      const element_top_position = $element.offset().top;
      const element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        $element.addClass('show');
      }
    });
  }

  /**
   * 初始化動畫
   */
  initAnimation() {
    this.stage2Config = {
      path: '/assets/json/Circle_step01.json',
      autoplay: false,
      loop: false
    };
    this.stage3Config = {
      path: '/assets/json/Circle_step02.json',
      autoplay: false,
      loop: false
    };
    this.stage4Config = {
      path: '/assets/json/Circle_step03.json',
      autoplay: false,
      loop: false
    };
  }

  /**
   * 處理動畫
   * @param target 場景
   * @param anim
   */
  handleAnimation(target, anim: any) {
    switch (target) {
      case 'stage2':
        this.stage2Anim = anim;
        break;
      case 'stage3':
        this.stage3Anim = anim;
        break;
      case 'stage4':
        this.stage4Anim = anim;
        break;
    }
  }

}
