import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvRedirectpagePage } from './sv-redirectpage.page';

const routes: Routes = [
  {
    path: '',
    component: SvRedirectpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvRedirectpagePageRoutingModule {}
