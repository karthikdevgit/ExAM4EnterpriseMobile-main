import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelpopoverPage } from './modelpopover.page';

const routes: Routes = [
  {
    path: '',
    component: ModelpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelpopoverPageRoutingModule {}
