import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  submitConfig: Object;
  errorConfig: Object;
  private submitAnim: any;
  private errorAnim: any;
  isclick = false;
  form: FormGroup;
  requirementArray = [
    '企業行動應用諮詢',
    'APP設計與開發',
    '網站/系統平台開發',
    '行動化資安測試',
    '舊APP/網站改版諮詢'
  ];
  budgetArray = [
    '50 - 100 萬',
    '100 - 200 萬',
    '200 - 300 萬',
    '300 - 400 萬',
    '500 萬以上'
  ];
  questionList = [
    {
      title: '這個服務或產品可以幫到哪些人？',
      content: '組織流程改造或企業內部的行動應用需求，我們可以協助您將現有營運流程行動化。'
    },
    {
      title: '產品有包含UI/UX視覺設計嗎？',
      content: '我們提供的產品，與目前市面上制式的APP不同，是透過多次使用者訪談觀察與業務流程分析，所規劃出的UI/UX設計，若您有興趣了解，我們的業務窗口，可到公司為您解說demo。'
    },
    {
      title: '通常一個案子會做多久？',
      content: '依需求底定和調整的狀態，我們開發的經驗，由2個月到6個月左右（或者超過）的時間皆不等。'
    },
    {
      title: '計價方式？',
      content: '我們的收費分為初次建置導入費用，以及雲端平台使用費。'
    },
    {
      title: '需要提供那些資訊資料，才能報價？',
      content: '報價的過程，會需要您們的協助，藉由聊聊現有的流程，碰到那些需要克服的環節，或是實際帶我們走一遍目前的運作方式，我們能提供您較具參考價值的時程與估價。'
    },
    {
      title: '專案結束後，後續擴充及維運怎麼辦？',
      content: '這是客戶最常詢問的問題之一，也是我們的強項，請放心交給我們。我們的平台在多家客戶已持續營運逾3年以上，7天24小時不中斷的服務，還有雲端客服窗口，有任何緊急問題報修，我們立即為您處理。'
    }
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.initAnimate();
  }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * 建立表單
   */
  buildForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [CustomValidators.email, Validators.required]],
      company: [null, [Validators.required]],
      part: '',
      tel: ['', [CustomValidators.phone('zh-TW')]],
      requirement: [null, [Validators.required]],
      budget: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  /**
   * input 發生改變時
   */
  inputChange(event) {
    const value = event.target.value;
    if (value) {
      $(event.target).addClass('hasValue');
    }else {
      $(event.target).removeClass('hasValue');
    }
  }


  getFormData() {
    console.log('this.form', this.form.value);
    this.isclick = true;
    this.submitAnim.play();
  }

  initAnimate() {
    this.submitConfig = {
      path: '/assets/json/btn_motion_submit.json',
      autoplay: false,
      loop: false
    };
    this.errorConfig = {
      path: '/assets/json/btn_motion_error.json',
      autoplay: false,
      loop: false
    };
  }

  handleAnimation(target, anim: any) {
    switch (target) {
      case 'submit':
        this.submitAnim = anim;
        break;
      case 'error':
        this.errorAnim = anim;
        break;
    }
  }

}
