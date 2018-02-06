import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * 共用元件：開闔元件
 * @export
 * @class PanelComponent
 */
@Component({
  selector: 'app-panel',
  styleUrls: ['./panel.component.scss'],
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() qaData;
  currentIdx: number;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  /**
   * 開闔功能設定
   * @param obj
   * @param idx
   */
  toggle(obj, idx) {
    if (idx !== this.currentIdx) {
      this.qaData.map(item => {
        item.opened = false;
      });
    };
    obj.opened = !obj.opened;
    this.currentIdx = idx;
  }

  /**
   * 針對內容做安全處理
   * @param content
   */
  trustContent(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
