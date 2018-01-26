import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  adData= [
    {
      imgKey: './assets/img/img_index_pic1.png',
      imgSmallKey: './assets/img/img_index_pic1.png'
    },
    {
      imgKey: './assets/img/img_index_pic2.png',
      imgSmallKey: './assets/img/img_index_pic2.png'
    },
    {
      imgKey: './assets/img/img_index_pic3.png',
      imgSmallKey: './assets/img/img_index_pic3.png'
    }
  ];
  adOptins= {
    nav: true,
    autoplayTimeout: 8000,
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

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
