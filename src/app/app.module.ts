import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { BSModalService } from './core/components/bs-modal/bs-modal.service';
import { WindowUtils } from './core/utils/window-utils.service';
import { GoogleAnalyticsEventsService } from './core/service/google-analytics-events.service';
import { ContactUsService } from './pages/contact-us/contact-us.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'star-sales'}),
    CoreModule,
    PagesModule,
    PagesRoutingModule
  ],
  providers: [
    BSModalService,
    WindowUtils,
    ContactUsService,
    GoogleAnalyticsEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
