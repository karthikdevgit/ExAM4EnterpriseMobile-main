import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {  ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RelateAMDetailPagePageRoutingModule } from './relate-amdetail-page-routing.module';

import { RelateAMDetailPagePage } from './relate-amdetail-page.page';
import { SectionTemplateComponent } from 'src/app/components/section-template/section-template.component';
import { TextQuestionComponent } from 'src/app/components/text-question/text-question.component';
import { QuestionTemplateComponent } from 'src/app/components/question-template/question-template.component';
import { AccordionComponentComponent } from 'src/app/components/accordion-component/accordion-component.component';
import { ButtonQuestionComponent } from 'src/app/components/button-question/button-question.component';
import { CheckboxQuestionComponent } from 'src/app/components/checkbox-question/checkbox-question.component';
import { EmailQuestionComponent } from 'src/app/components/email-question/email-question.component';
import { RadioPicklistQuestionComponent } from 'src/app/components/radio-picklist-question/radio-picklist-question.component';
import { ListQuestionComponent } from 'src/app/components/list-question/list-question.component';
import { DropDownPicklistQuestionComponent } from 'src/app/components/drop-down-picklist-question/drop-down-picklist-question.component';
import { TextareaQuestionComponent } from 'src/app/components/textarea-question/textarea-question.component';
import { RichTextQuestionComponent } from 'src/app/components/rich-text-question/rich-text-question.component';
import { NumberQuestionComponent } from 'src/app/components/number-question/number-question.component';
import { PhoneNumberQuestionComponent } from 'src/app/components/phone-number-question/phone-number-question.component';
import { DateQuestionComponent } from 'src/app/components/date-question/date-question.component';
import { DateTimeQuestionComponent } from 'src/app/components/date-time-question/date-time-question.component';
import { MultimediaQuestionComponent } from 'src/app/components/multimedia-question/multimedia-question.component';
import { MultiSelectQuestionComponent } from 'src/app/components/multi-select-question/multi-select-question.component';
import { LikertQuestionComponent } from 'src/app/components/likert-question/likert-question.component';
import { HorizontalPicklistQuestionComponent } from 'src/app/components/horizontal-picklist-question/horizontal-picklist-question.component';
import { LocationQuestionComponent } from 'src/app/components/location-question/location-question.component';
import { EachAMRenderComponent } from 'src/app/svcomponents/each-amrender/each-amrender.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelateAMDetailPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RelateAMDetailPagePage,
                SectionTemplateComponent,
                TextQuestionComponent,
                ButtonQuestionComponent,
                QuestionTemplateComponent,
                AccordionComponentComponent,
                CheckboxQuestionComponent,
                EmailQuestionComponent,
                RadioPicklistQuestionComponent,
              ListQuestionComponent,
              DropDownPicklistQuestionComponent,
              TextareaQuestionComponent,
              RichTextQuestionComponent,
              NumberQuestionComponent,
              PhoneNumberQuestionComponent,
              DateQuestionComponent,
              DateTimeQuestionComponent,
              MultimediaQuestionComponent,
              MultiSelectQuestionComponent,
              LikertQuestionComponent,
              HorizontalPicklistQuestionComponent,
              LocationQuestionComponent,
              EachAMRenderComponent]
})
export class RelateAMDetailPagePageModule {}
