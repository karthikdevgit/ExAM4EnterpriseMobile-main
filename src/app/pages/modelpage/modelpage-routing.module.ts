import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelpagePage } from './modelpage.page';

const routes: Routes = [
  {
    path: '',
    component: ModelpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelpagePageRoutingModule {}
