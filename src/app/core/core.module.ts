import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { AdCarouselComponent } from './components/ad-carousel/ad-carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { FixedPageComponent } from './components/fixed-page/fixed-page.component';
import { PanelComponent } from './components/panel/panel.component';

const components = [
  HeaderComponent,
  AdCarouselComponent,
  ContactComponent,
  FixedPageComponent,
  PanelComponent
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
})
export class CoreModule { }
