import { Injectable } from '@angular/core';

/**
 * WindowUtil
 * @export
 * @class WindowUtils
 */
@Injectable()
export class WindowUtils {

  constructor() {}

  /**
   * 網頁移至最頂
   */
  scrollTop() {
    window.scrollTo(0, 0);
  };

  /**
   * 開啟網址
   */
  openUrl(url, _target) {
     window.open(url, _target);
  };

}
