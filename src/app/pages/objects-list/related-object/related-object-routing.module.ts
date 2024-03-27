import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatedObjectPage } from './related-object.page';

const routes: Routes = [
  {
    path: '',
    component: RelatedObjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelatedObjectPageRoutingModule {}
