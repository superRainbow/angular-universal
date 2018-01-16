import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    PagesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
