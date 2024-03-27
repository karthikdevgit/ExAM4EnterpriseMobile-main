import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatedAmsPage } from './related-ams.page';

const routes: Routes = [
  {
    path: '',
    component: RelatedAmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatedAmsPageRoutingModule {}
