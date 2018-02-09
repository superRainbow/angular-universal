import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  nowItem = 0;
  teamStyle = '';
  adList = [
    {
      icon: 'icon-ico_collaboration',
      text: '以多元角度協助客戶'
    },
    {
      icon: 'icon-ico_helping_hand',
      text: '以我們多年經驗協助客戶解決困境'
    },
    {
      icon: 'icon-ico_multicast',
      text: '團隊融入客戶團隊重視溝通討論'
    }
  ];
  historyList = [
    {
      time: '1991.05',
      content: '三竹資訊股份有限公司成立，資本額 5,000 仟元'
    },
    {
      time: '2010.02',
      content: 'APP 應用事業群成立，協助設計出台灣第一家行動銀行APP，上架成功。'
    },
    {
      time: '2011/11',
      content: '與P&G合作開發SFA業務輔銷管理平台iPad APP，採中華電信雲端機房24HRS維運'
    },
    {
      time: '2012/11',
      content: '三竹資訊(8284)正式登入興櫃掛牌'
    },
    {
      time: '2013/10',
      content: '開發訊息推播平台，導入多家券商及台新銀行'
    },
    {
      time: '2014/12',
      content: '輔銷管理平台導入商化業務行動應用，於全聯通路上線營運'
    },
    {
      time: '2015/03',
      content: '因應金管會Fintech政策，協助多家銀行進行Bank 3.0線上申辦服務APP'
    },
    {
      time: '2017/04',
      content: '配合知名金控開發企業授信管理平台APP'
    },
    {
      time: '2017/09',
      content: '配合知名飲品集團開發內部行動應用APP'
    },
    {
      time: '2017/12',
      content: '輔銷管理平台採用Google Cloud Platform雲端服務，提高平台伺服器運算等級'
    }
  ];

  teamList = [
    {
      topTitle: '陣容堅實的研發團隊',
      topDes: '我們擁有專業的程式團隊，並具有各種平台的開發技術；提供客戶之多元需求。而多年來與各產業合作；早已累積了豐富的開發經驗，除了能開發符合使用者操作的人性化介面，更能協助業主以程式開發、軟硬體規劃來優化企業內部之工作流程。',
      topSmallDes: '',
      subTitle: '開發團隊',
      subDes: '目前程式 Engineer 42 員，PM/SA/設計 22 員；團隊合計 64 員。'
    },
    {
      topTitle: '團隊能力，有口皆碑',
      topDes: '多年來與購物、醫療、產壽險等產業合作，開發出可滿足各行業的客制化功能，為全台業界經驗最豐富的 APP 研發團隊。',
      topSmallDes: '',
      subTitle: '技術與口碑',
      subDes: '我們團隊在開發能力或經驗除了頗受市場好評之外，更為業界之標竿。'
    },
    {
      topTitle: '安心的維運保障，並提供客服諮詢服務',
      topDes: '與業主合作；確實的完成專案上線外，我們也提供保障資料安全的維運技術。其維運包含 *GCP (Google 雲端平台) 與客服等服務。',
      topSmallDes: 'GCP（Google Cloud Platform）是一項使用了 Google 核心基礎架構、資料分析和機器學習技術的雲計算服務。用於構建從簡單網站到複雜應用程式的一系列程式，並提供一系列模塊化的基於雲的服務和大量開發工具，例如託管和計算、雲存儲、資料存儲。其優點為是在 Google 的核心架構下，安全無虞且功能完善，適合所有企業使用。',
      subTitle: '安心維運',
      subDes: '本團隊具備專業的開發能力，更擁有保障資料安全維運，並提供諮詢、協助操作等客服服務。'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  /**
   * 改變背景 style
   * @param i
   */
  changeBg(i) {
    this.nowItem = i;
    this.teamStyle = 'teamBg-' + i;
  }

}
