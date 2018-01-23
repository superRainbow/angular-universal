import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'service', pathMatch: 'full' },
      { path: 'service', component: ServiceComponent },
      { path: '**', redirectTo: 'service'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
