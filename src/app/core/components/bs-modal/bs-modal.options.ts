import { Observable } from 'rxjs/Observable';

declare type Handler = () => void;
declare type HandlerWithParams = (params?: any) => void;

export enum BS_MODAL_TYPES  {
  ALERT_MODAL
};

export interface BSModalOptions {
  modalClass?: string;
  title?: string;
  icon?: string;
  msg?: string;
  okBtnText?: string;
  okBtn?: boolean;
  cancelBtnText?: string;
  cancelBtn?: boolean;
  afterModalOpen?: Observable<any>;
  beforeModalClose?: Observable<any>;
  callback?: HandlerWithParams;
  cancelCallback?: HandlerWithParams;
  imgKey?: string;
  dismissBtn?: boolean;
}

export interface ModalOpenOptions {
  isOpened: boolean;
  modalType?: BS_MODAL_TYPES;
}
