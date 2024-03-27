import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'inspections-list',
    loadChildren: () => import('./pages/objects-list/objects-list.module').then( m => m.ObjectsListPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'objects-details',
    loadChildren: () => import('./pages/objects-details/objects-details.module').then( m => m.ObjectsDetailsPageModule)
  },
  {
    path: 'view-details',
    loadChildren: () => import('./pages/objects-list/view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  },
  {
    path: 'related-records',
    loadChildren: () => import('./pages/related-records/related-records.module').then( m => m.RelatedRecordsPageModule)
  },
  {
    path: 'related-ams',
    loadChildren: () => import('./pages/related-ams/related-ams.module').then( m => m.RelatedAmsPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'relate-amdetail-page',
    loadChildren: () => import('./pages/relate-amdetail-page/relate-amdetail-page.module').then( m => m.RelateAMDetailPagePageModule)
  },
  {
    path: 'related-object',
    loadChildren: () => import('./pages/objects-list/related-object/related-object.module').then( m => m.RelatedObjectPageModule)
  },
  {
    path: 'redirectpageforrelatedlevel-obj',
    loadChildren: () => import('./pages/objects-list/redirectpageforrelatedlevel-obj/redirectpageforrelatedlevel-obj.module').then( m => m.RedirectpageforrelatedlevelObjPageModule)
  },
  {
    path: 'all-related-record-render-obj',
    loadChildren: () => import('./pages/objects-list/all-related-record-render/all-related-record-render.module').then( m => m.AllRelatedRecordRenderPageModule)
  },
  {
    path: 'sv-redirectpage',
    loadChildren: () => import('./pages/objects-list/sv-redirectpage/sv-redirectpage.module').then( m => m.SvRedirectpagePageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
