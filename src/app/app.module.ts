import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { BSModalService } from './core/components/bs-modal/bs-modal.service';

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
    BSModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
