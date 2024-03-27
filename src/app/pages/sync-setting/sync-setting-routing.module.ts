import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyncSettingPage } from './sync-setting.page';

const routes: Routes = [
  {
    path: '',
    component: SyncSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyncSettingPageRoutingModule {}
