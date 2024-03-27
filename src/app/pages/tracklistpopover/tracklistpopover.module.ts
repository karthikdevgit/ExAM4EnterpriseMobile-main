import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TracklistpopoverPageRoutingModule } from './tracklistpopover-routing.module';

import { TracklistpopoverPage } from './tracklistpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TracklistpopoverPageRoutingModule
  ],
  declarations: [TracklistpopoverPage]
})
export class TracklistpopoverPageModule {}
