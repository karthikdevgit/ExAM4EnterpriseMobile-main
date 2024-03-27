import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TracklistpopoverPage } from './tracklistpopover.page';

const routes: Routes = [
  {
    path: '',
    component: TracklistpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracklistpopoverPageRoutingModule {}
