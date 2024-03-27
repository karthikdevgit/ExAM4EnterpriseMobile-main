import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelateAMDetailPagePage } from './relate-amdetail-page.page';

const routes: Routes = [
  {
    path: '',
    component: RelateAMDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelateAMDetailPagePageRoutingModule {}
