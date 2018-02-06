import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BSModalOptions, ModalOpenOptions } from './bs-modal.options';

@Injectable()
export class BSModalService {

  private modalOpenSubject = new Subject<ModalOpenOptions>();

  // 觀察的主題
  private modalAlertSubject = new Subject<BSModalOptions>();

  // 該觀察主題的訂閱者串流
  modalOpen$ = this.modalOpenSubject.asObservable();
  showModalAlert$ = this.modalAlertSubject.asObservable();

  constructor() { }

  // 通知訂閱者主題變更

  /**
   * 通知基本視窗開啟
   * @param options
   */
  notifyModalOpen(options: ModalOpenOptions) {
    this.modalOpenSubject.next(options);
  }

  /**
   * 通知alert視窗開啟
   * @param options
   */
  notifyShowModalAlert(options: BSModalOptions) {
    this.modalAlertSubject.next(options);
  }

}
