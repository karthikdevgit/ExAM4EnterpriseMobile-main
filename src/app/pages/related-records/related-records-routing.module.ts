import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatedRecordsPage } from './related-records.page';

const routes: Routes = [
  {
    path: '',
    component: RelatedRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatedRecordsPageRoutingModule {}
