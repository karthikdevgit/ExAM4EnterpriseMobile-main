import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRelatedRecordRenderPage } from './all-related-record-render.page';

const routes: Routes = [
  {
    path: '',
    component: AllRelatedRecordRenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllRelatedRecordRenderPageRoutingModule {}
