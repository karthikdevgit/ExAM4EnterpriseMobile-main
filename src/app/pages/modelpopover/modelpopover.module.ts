import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelpopoverPageRoutingModule } from './modelpopover-routing.module';

import { ModelpopoverPage } from './modelpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelpopoverPageRoutingModule
  ],
  declarations: [ModelpopoverPage]
})
export class ModelpopoverPageModule {}
