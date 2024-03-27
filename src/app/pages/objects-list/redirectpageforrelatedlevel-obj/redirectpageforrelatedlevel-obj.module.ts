import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirectpageforrelatedlevelObjPageRoutingModule } from './redirectpageforrelatedlevel-obj-routing.module';

import { RedirectpageforrelatedlevelObjPage } from './redirectpageforrelatedlevel-obj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirectpageforrelatedlevelObjPageRoutingModule
  ],
  declarations: [RedirectpageforrelatedlevelObjPage]
})
export class RedirectpageforrelatedlevelObjPageModule {}
