import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvRedirectpagePageRoutingModule } from './sv-redirectpage-routing.module';

import { SvRedirectpagePage } from './sv-redirectpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SvRedirectpagePageRoutingModule
  ],
  declarations: [SvRedirectpagePage]
})
export class SvRedirectpagePageModule {}
