import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CasePngComponent } from './case/case-png/case-png.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'service', pathMatch: 'full' },
      { path: 'service', component: ServiceComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'case', redirectTo: 'case/case-png', pathMatch: 'full' },
      { path: 'case/case-png', component: CasePngComponent },
      { path: '**', redirectTo: 'service'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
