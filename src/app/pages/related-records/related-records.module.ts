import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatedRecordsPageRoutingModule } from './related-records-routing.module';

import { RelatedRecordsPage } from './related-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatedRecordsPageRoutingModule
  ],
  declarations: [RelatedRecordsPage]
})
export class RelatedRecordsPageModule {}
