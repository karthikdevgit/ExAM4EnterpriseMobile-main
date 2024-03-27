import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectsListPageRoutingModule } from './objects-list-routing.module';

import { ObjectsListPage } from './objects-list.page';
import { TreeViewNotEnabledComponent } from 'src/app/svcomponents/tree-view-not-enabled/tree-view-not-enabled.component';
import { EachObjectRenderComponent } from 'src/app/svcomponents/each-object-render/each-object-render.component';
import { EachRelatedObjButtonRenderComponent } from 'src/app/svcomponents/each-related-obj-button-render/each-related-obj-button-render.component';
import { EachAMButtonRenderComponent } from 'src/app/svcomponents/each-ambutton-render/each-ambutton-render.component';
import { TreeViewEnabledComponent } from 'src/app/svcomponents/tree-view-enabled/tree-view-enabled.component';
import { SchemaViewSelectComponent } from 'src/app/svcomponents/schema-view-select/schema-view-select.component';
import { EachAMRenderComponent } from 'src/app/svcomponents/each-amrender/each-amrender.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectsListPageRoutingModule
  ],
  declarations: [ObjectsListPage,TreeViewNotEnabledComponent,EachObjectRenderComponent,EachRelatedObjButtonRenderComponent,EachAMButtonRenderComponent,TreeViewEnabledComponent,SchemaViewSelectComponent,
    EachAMRenderComponent]
})
export class ObjectsListPageModule {}
