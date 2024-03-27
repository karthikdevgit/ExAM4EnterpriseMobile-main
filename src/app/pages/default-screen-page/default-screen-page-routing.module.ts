import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultScreenPagePage } from './default-screen-page.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultScreenPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultScreenPagePageRoutingModule {}
