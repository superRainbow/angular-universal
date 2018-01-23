import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { AdCarouselComponent } from './components/ad-carousel/ad-carousel.component';

const components = [
  HeaderComponent,
  AdCarouselComponent
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
