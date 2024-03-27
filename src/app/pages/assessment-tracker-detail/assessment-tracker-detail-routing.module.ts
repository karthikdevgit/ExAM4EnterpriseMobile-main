import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentTrackerDetailPage } from './assessment-tracker-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AssessmentTrackerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssessmentTrackerDetailPageRoutingModule {}
