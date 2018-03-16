import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { HeaderComponent } from './components/header/header.component';
import { AdCarouselComponent } from './components/ad-carousel/ad-carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { FixedPageComponent } from './components/fixed-page/fixed-page.component';
import { PanelComponent } from './components/panel/panel.component';
import { BSModalComponent } from './components/bs-modal/bs-modal.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [
  HeaderComponent,
  AdCarouselComponent,
  ContactComponent,
  FixedPageComponent,
  PanelComponent,
  BSModalComponent,
  FooterComponent
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2Bs3ModalModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
})
export class CoreModule { }
