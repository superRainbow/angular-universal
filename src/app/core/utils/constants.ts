/**
 * Nomura-Core 共用Constants
 */
export class Constants {

  /** MODAL文字設定 */
  static MODAL = {
    ALERT_TITLE: '系統提示',
    OK_BTN_TEXT: '確定',
    CANCEL_BTN_TEXT: '取消',
  };


  /** 瀏覽器支援度文案 */
  static BROWSER_SUPPORT = '建議您使用Google Chrome或使用 IE11(含) 以上版本瀏覽器，以獲得最佳瀏覽體驗。';

  /**
   * 特殊按鍵KeyCode
   */
  static SPECIAL_KEYCODES = [
    37, 38, 39, 40, // 左,上,右,下
    32, 8, 9, 46 // Space,Back,Tab,Del
  ];

}
