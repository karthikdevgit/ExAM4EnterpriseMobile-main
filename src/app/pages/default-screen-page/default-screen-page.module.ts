import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FolderPage } from '../../folder/folder.page';
import { IonicModule } from '@ionic/angular';

import { DefaultScreenPagePageRoutingModule } from './default-screen-page-routing.module';

import { DefaultScreenPagePage } from './default-screen-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultScreenPagePageRoutingModule
  ],
  declarations: [DefaultScreenPagePage],
  providers: [FolderPage]
})
export class DefaultScreenPagePageModule {}
