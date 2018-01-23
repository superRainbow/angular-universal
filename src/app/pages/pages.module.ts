import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { PagesRoutingModule } from './pages-routing.module';

import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    PagesRoutingModule
  ],
  declarations: [
    MainComponent,
    ServiceComponent
  ]
})
export class PagesModule { }
