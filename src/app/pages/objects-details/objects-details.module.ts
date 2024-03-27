import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectsDetailsPageRoutingModule } from './objects-details-routing.module';

import { ObjectsDetailsPage } from './objects-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectsDetailsPageRoutingModule
  ],
  declarations: [ObjectsDetailsPage]
})
export class ObjectsDetailsPageModule {}
