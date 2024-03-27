import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyncSettingPageRoutingModule } from './sync-setting-routing.module';

import { SyncSettingPage } from './sync-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyncSettingPageRoutingModule
  ],
  declarations: [SyncSettingPage]
})
export class SyncSettingPageModule {}
