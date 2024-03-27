import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessmentTrackerDetailPageRoutingModule } from './assessment-tracker-detail-routing.module';

import { AssessmentTrackerDetailPage } from './assessment-tracker-detail.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    AssessmentTrackerDetailPageRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    OrderModule
  ],
  declarations: [AssessmentTrackerDetailPage]
})
export class AssessmentTrackerDetailPageModule {}
