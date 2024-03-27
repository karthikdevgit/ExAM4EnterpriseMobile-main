import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatedAmsPageRoutingModule } from './related-ams-routing.module';

import { RelatedAmsPage } from './related-ams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatedAmsPageRoutingModule
  ],
  declarations: [RelatedAmsPage]
})
export class RelatedAmsPageModule {}
