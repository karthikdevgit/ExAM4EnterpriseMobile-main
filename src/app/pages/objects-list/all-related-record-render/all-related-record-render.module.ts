import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllRelatedRecordRenderPageRoutingModule } from './all-related-record-render-routing.module';

import { AllRelatedRecordRenderPage } from './all-related-record-render.page';

import { EachObjectRenderComponent } from 'src/app/svcomponents/each-object-render/each-object-render.component';
import { EachRelatedObjButtonRenderComponent } from 'src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component';
import { EachAMButtonRenderComponent } from 'src/app/svcomponents/each-ambutton-render/each-ambutton-render.component';
import { TreeViewEnabledComponent } from 'src/app/svcomponents/tree-view-enabled/tree-view-enabled.component';
import { TreeViewNotEnabledComponent } from 'src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllRelatedRecordRenderPageRoutingModule
  ],
  declarations: [AllRelatedRecordRenderPage,TreeViewNotEnabledComponent,EachObjectRenderComponent,EachRelatedObjButtonRenderComponent,EachAMButtonRenderComponent,TreeViewEnabledComponent]
})
export class AllRelatedRecordRenderPageModule {}
