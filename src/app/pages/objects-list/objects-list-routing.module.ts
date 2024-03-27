import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectsListPage } from './objects-list.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectsListPage
  },
  {
    path: 'view-details',
    loadChildren: () => import('./view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  },
  {
    path: 'edit-details',
    loadChildren: () => import('./edit-details/edit-details.module').then( m => m.EditDetailsPageModule)
  },
  {
    path: 'related-object',
    loadChildren: () => import('./related-object/related-object.module').then( m => m.RelatedObjectPageModule)
  },
  {
    path: 'redirectpageforrelatedlevel-obj',
    loadChildren: () => import('./redirectpageforrelatedlevel-obj/redirectpageforrelatedlevel-obj.module').then( m => m.RedirectpageforrelatedlevelObjPageModule)
  },
  {
    path: 'all-related-record-render',
    loadChildren: () => import('./all-related-record-render/all-related-record-render.module').then( m => m.AllRelatedRecordRenderPageModule)
  },
  {
    path: 'sv-redirectpage',
    loadChildren: () => import('./sv-redirectpage/sv-redirectpage.module').then( m => m.SvRedirectpagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectsListPageRoutingModule {}
