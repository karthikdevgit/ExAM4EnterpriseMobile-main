import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectsDetailsPage } from './objects-details.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectsDetailsPageRoutingModule {}
