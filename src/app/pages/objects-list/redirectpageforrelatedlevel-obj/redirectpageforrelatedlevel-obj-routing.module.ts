import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectpageforrelatedlevelObjPage } from './redirectpageforrelatedlevel-obj.page';

const routes: Routes = [
  {
    path: '',
    component: RedirectpageforrelatedlevelObjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedirectpageforrelatedlevelObjPageRoutingModule {}
