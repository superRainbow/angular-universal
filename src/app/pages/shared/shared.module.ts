import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BusyModule} from 'tixif-ngx-busy';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BusyModule,
    Ng2Bs3ModalModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BusyModule,
    Ng2Bs3ModalModule
  ],
  declarations: []
})
export class SharedModule { }
