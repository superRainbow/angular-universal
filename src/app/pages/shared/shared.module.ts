import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule
  ],
  declarations: []
})
export class SharedModule { }
