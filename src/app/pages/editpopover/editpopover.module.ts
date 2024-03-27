import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpopoverPageRoutingModule } from './editpopover-routing.module';

import { EditpopoverPage } from './editpopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditpopoverPageRoutingModule
  ],
  declarations: [EditpopoverPage]
})
export class EditpopoverPageModule {}
