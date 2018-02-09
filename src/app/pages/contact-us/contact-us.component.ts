import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

import { BSModalService } from '../../core/components/bs-modal/bs-modal.service';
import { WindowUtils } from '../../core/utils/window-utils.service';
import { ContactUsService } from './contact-us.service';

import { Subscription } from 'rxjs/Subscription';

/**
 * 聯繫頁面
 * @export
 * @class ContactUsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  showError = false;
  btnAnimate = 0;
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
    private fb: FormBuilder,
    private bsModalService: BSModalService,
    private window: WindowUtils,
    private contactUsService: ContactUsService
  ) {}

  ngOnInit() {
    this.window.scrollTop();
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
      tel: ['', [Validators.required, CustomValidators.number]],
      requirement: [null, [Validators.required]],
      budget: [0, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  restForm() {
    this.btnAnimate = 0;
    this.form.reset({budget: 0});
    this.showError = false;
  }

  /**
   * 按下送出
   */
  getFormData() {
    if (this.form.invalid) {
      this.openError('資料尚未填妥喔！');
    }else {
      this.btnAnimate = 1;
      const data = Object.assign({}, this.form.value);
      data.requirement = this.requirementArray[this.form.value.requirement];
      data.budget = this.budgetArray[this.form.value.budget];
      this.contactUsService
        .sendForm(data)
        .subscribe((response) => {
          if (response['returnCode'] === 200) {
            this.btnAnimate = 2;
            setTimeout(() => {
              this.restForm();
            }, 4000);
          }else {
            this.openError('寄信發生錯誤！請洽業務聯絡窗口。', false);
            this.restForm();
          }
        });
    }
  }

  /**
   * 跳出錯誤modal
   */
  openError(msg, showError= true) {
    this.bsModalService.notifyShowModalAlert({
      title: '提醒您',
      msg: msg,
      icon: 'icon-ico_error',
      cancelBtn: false,
      callback: () => {
        this.showError = showError;
      }
    });
  };

}
