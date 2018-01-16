import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';

import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],
  declarations: [
    MainComponent,
    ServiceComponent
  ]
})
export class PagesModule { }
