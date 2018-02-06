import { ModalComponent } from 'ng2-bs3-modal/components/modal';
import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation, Attribute } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { BSModalService } from './bs-modal.service';

import { BSModalOptions, BS_MODAL_TYPES } from './bs-modal.options';
import { Constants } from '../../utils/constants';


/**
 * 共用元件：POPUP彈出視窗
 */
@Component({
  selector: 'app-bs-modal',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BSModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modal') modal: ModalComponent;
  preventTouchScroll: boolean = false;
  modalOptions;
  alertOptions;

  modalAlertSubscription: Subscription;

  errorMsg: string = '';
  sending: boolean = false;

  constructor(
    private bsModalService: BSModalService
  ) {

    this.modalOptions = {
      title: Constants.MODAL.ALERT_TITLE,
      icon: '',
      msg: '',
      okBtnText: Constants.MODAL.OK_BTN_TEXT,
      okBtn: true,
      cancelBtnText: Constants.MODAL.CANCEL_BTN_TEXT,
      cancelBtn: true,
      callback: () => {},
      beforeClose: () => {}
    };

    this.alertOptions = {
      title: Constants.MODAL.ALERT_TITLE,
      icon: '',
      msg: '',
      okBtnText: Constants.MODAL.OK_BTN_TEXT,
      okBtn: true,
      dismissBtn: true,
      cancelBtnText: Constants.MODAL.CANCEL_BTN_TEXT,
      cancelBtn: true,
      callback: () => {}
    };
  }

  ngOnInit() {
    this.modalAlertSubscription = this.bsModalService.showModalAlert$.subscribe(
      (options) => {
        this.bsModalService.notifyModalOpen({
          isOpened: true,
          modalType: BS_MODAL_TYPES.ALERT_MODAL
        });
        this.showModalAlert(options);
      }
    );
  }

  ngAfterViewInit() {
    window.ontouchmove = (e) => {
      if (this.preventTouchScroll) {
        e.preventDefault();
      }
    };
  }

  /**
   * 顯示提示視窗
   * @param _options
   */
  showModalAlert(_options: BSModalOptions) {
    this.modalOptions = Object.assign({}, this.alertOptions, _options, {show: true});
    this.modal.open();
  };

  /**
   * 開啟視窗之前事件
   * @param _modalComponent
   */
  beforeOpen(_modalComponent) {
    this.preventTouchScroll = true;
  }

  /**
   * 開啟視窗之後事件
   * @param _modalComponent
   */
  afterOpen(_modalComponent) {
    this.preventTouchScroll = true;
  }

  /**
   * 關閉視窗之前事件
   */
  beforeClose() {
    this.preventTouchScroll = false;
  }

  /**
   * 關閉視窗
   * @param _modal
   * @param _value
   */
  modalClose(_modal: ModalComponent, _value?) {
    _modal.close().then(() => {
      let object;
      this.bsModalService.notifyModalOpen({
        isOpened: false
      });
      switch (_modal) {
        default:
          object = Object.assign({}, this.modalOptions);
          break;
      }
      if (object.callback) {
        object.callback(_value);
      }
    });
  }

  /**
   * 視窗取消事件
   * @param _modal
   */
  modalCancel(_modal: ModalComponent, extra?: any) {
    _modal.close().then(() => {
      let object;
      this.bsModalService.notifyModalOpen({
        isOpened: false
      });
      switch (_modal) {
        default:
          object = Object.assign({}, this.modalOptions);
          break;
      }
      if (object.cancelCallback) {
        object.cancelCallback();
      }
    });
  }

}
