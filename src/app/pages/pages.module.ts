import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LottieAnimationViewModule } from 'ng-lottie';

import { CoreModule } from '../core/core.module';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    CoreModule,
    PagesRoutingModule,
    LottieAnimationViewModule.forRoot()
  ],
  declarations: [
    MainComponent,
    ServiceComponent,
    ContactUsComponent
  ]
})
export class PagesModule { }
