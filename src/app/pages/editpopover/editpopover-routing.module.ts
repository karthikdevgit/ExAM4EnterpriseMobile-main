import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpopoverPage } from './editpopover.page';

const routes: Routes = [
  {
    path: '',
    component: EditpopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpopoverPageRoutingModule {}
