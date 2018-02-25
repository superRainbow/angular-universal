import { Component, OnInit } from '@angular/core';

import { WindowUtils } from '../../../core/utils/window-utils.service';

@Component({
  selector: 'app-case-png',
  templateUrl: './case-png.component.html',
  styleUrls: ['./case-png.component.scss']
})
export class CasePngComponent implements OnInit {

  adSection = {
    title: '我們為業務一日行程，量身打造。',
    des: 'Project / P&G 寶僑',
    icon: 'icon-ico_sales_package'
  }

  a1Section = {
    title: '越忙，越需要有效率的工作方式',
    des: [
      '業務在外，不論是跑例行的客戶拜訪行程，還是去店面處理銷售訂單…在仔細觀察這些忙碌的背後，其實我們可以更有效率的消化這些繁瑣而耗時的工作流程。',
      '我們協助企業的方案，僅需要導入一套符合業務工作的整合性系統。'
    ]
  };

  a2Section = {
    title: '在大型企業，管理層所面臨的困擾',
    icon: 'icon-ico_management',
    list: [
      '幾十個品牌，上千種商品，上萬個產品型號。',
      '供應商和經銷商緊密的供應鍊關係。',
      '上萬家店家管理。',
      '無法掌控幾十位或上百位外勤人員的拜訪店家或訂單作業的狀況。',
      '增加掌控人力：在尚未導入管理系統前，以往只能增派稽核人員，以人工檢核的方式來驗證作業結果，減少稽核成本。'
    ]
  };

  a3Section = {
    title: '開發流程改善，並加以優化',
    list: [
      '觀察並建立有效的銷售流程，減少錯誤和重複業務作業。',
      '編排行程規劃機制，協助確認業務目標；並提高達成率。',
      '經由統計報表或知識庫，提供跨部門資訊共享和必要情報。',
      '依據歷史銷售資料提高銷售預測精準度，避免產銷過程的浪費。',
      '鎖定目標族群，明確的建立獲利體系。'
    ],
    carousel: [
      {
        imgKey: './assets/img/img_pg_pic_1.jpg',
        imgSmallKey: './assets/img/img_pg_pic_1.jpg'
      },
      {
        imgKey: './assets/img/img_pg_pic_2.jpg',
        imgSmallKey: './assets/img/img_pg_pic_2.jpg'
      },
      {
        imgKey: './assets/img/img_pg_pic_3.jpg',
        imgSmallKey: './assets/img/img_pg_pic_3.jpg'
      }
    ],
    carouselOptins: {
      nav: false,
      dots: false,
      autoplayTimeout: 8000,
    }
  };

  a4Section = {
    title: '提供員工最佳化的工作流程，是我們最大的榮耀！',
    des: '2012年，我們團隊協助寶僑研究、討論，提供業主最優質的工作流程。',
    list: [
      {
        text: '提供訂單無紙化的企業環境，除提昇效率外；更為環保盡一份心力。',
        icon: 'icon-ico_no_paper'
      },
      {
        text: '訂單審核流程，由兩天提升到30分鐘內，迅速而確實的稽核。',
        icon: 'icon-ico_30min'
      },
      {
        text: '拜訪流程加快：一天可拜訪客戶數倍增，增加有效訂單。',
        icon: 'icon-ico_process'
      },
      {
        text: '主管依操作介面，除了可以精確的掌控數據報表；也能瞭解各個銷售團隊概況。',
        icon: 'icon-ico_report'
      },
      {
        text: '降低新進人員學習成本：因系統協助，原需兩個禮拜，現在只要3天即可完成教育訓練。',
        icon: 'icon-ico_training'
      }
    ]
  };

  constructor(
    private window: WindowUtils
  ) { }

  ngOnInit() {
    this.window.scrollTop();
  }

}
