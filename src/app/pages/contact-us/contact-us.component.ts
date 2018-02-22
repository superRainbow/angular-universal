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

  privacyMsg = `
    <p>非常歡迎您光臨「三竹資訊網站」，為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：</p>
    <section>
      <h5>隱私權保護宣告適用範圍</h5>
      <p>以下的隱私權政策，適用於您在「三竹資訊網站」活動時，所涉及的個人資料蒐集、應用及保護，但不適用於與本網站功能連結之各機關網站。凡經由「三竹資訊網站」連結之各網站，不論是由全國各政府機關獨立經營或是其他機關、團體、公司等，各網站均有其專屬之隱私權政策，「三竹資訊網站」不負任何連帶責任。當您在這些「三竹資訊網站」以外之網站活動時，關於個人資料的保護，適用各該網站的隱私權政策。</p>
    </section>
    <section>
      <h5>個人資料之蒐集政策</h5>
      <p>使用者單純在「三竹資訊網站」的瀏覽及檔案下載行為，本網站並不會蒐集取得任何有關個人的身份資料。如利用「三竹資訊網站」所提供的聯絡信箱或各項線上申請、諮詢服務(如：聯絡我們、申請試用、促銷活動…等)，本網站才可能事先要求使用者登錄個人資料，各承辦單位會依案件辦理需求請您提供姓名、聯絡電話、服務單位、E-mail等個人最新、最真實之資訊，以符合活動公正性、或是利於快速與使用者聯繫、提供最完善的服務。</p>
      <p>本網站會記錄使用者上站的IP位址、上網時間、使用的瀏覽器以及在網站內所瀏覽點選的網頁紀錄等資料，惟這些資料僅供「三竹資訊網站」內部作網站流量和網路行為調查的總量分析，以利於提昇本網站的服務品質，且「三竹資訊網站」僅對全體使用者行為總和進行分析，並不會針對個別使用者進行分析或與其個別聯繫。</p>
    </section>
    <section>
      <h5>個人資料之應用及公開方式</h5>
      <p>本網站所取得的個人資料，非經事先說明或取得您的同意，或符合以下情況者始得為之： 甲、經由合法的途徑。 乙、保護或防衛相關個人的權利或所有權。 本網站不會將使用者之個人資料提供給第三人、或移作其他目的使用。但有下列情形者除外：1. 配合司法單位合法的調查。2. 配合相關職權機關依職務需要之調查或使用。3. 基於善意相信揭露為法律需要，或為維護和改進網站服務而用於管理。本網站將依法令規定保護每一位使用者的個人資料，您可依法令規定選擇您的個人資料被運用的方式，並隨時與我們聯絡。</p>
    </section>
    <section>
      <h5>個人資料之保護措施</h5>
      <p>請妥善保護您的帳號密碼及或任何個人資料的機密安全，不要將任何個人資料，尤其是密碼提供給任何人。在您使用完本網站所提供的各項服務功能後，務必記得登出使用以保護個人帳號不會遭到其他人濫用，若您是與他人共享電腦或使用公共電腦，切記要關閉瀏覽器視窗，以防止他人讀取您的個人資料或信件。所有使用者行為皆應遵循國內、外法律規範，並且對於個人所屬帳號、密碼所發生之情事負全部責任。</p>
    </section>
    <section>
      <h5>Cookie之使用</h5>
      <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行 。</p>
    </section>
    <section>
      <h5>隱私權保護宣告之諮詢</h5>
      <p>如果您對以上條款有任何疑問，歡迎利用本網站諮詢服務與我們聯絡。</p>
    </section>
  `;

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
      description: [null, [Validators.required]],
      agree: null
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

  showPrivacy() {
    this.bsModalService.notifyShowModalAlert({
      modalClass: 'privacy-modal',
      title: '隱私政策',
      msg: this.privacyMsg,
      icon: 'icon-ico_privacy',
      okBtn: false,
      cancelBtn: false
    });
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
