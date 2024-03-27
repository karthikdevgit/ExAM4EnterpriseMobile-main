import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-horizontal-picklist-question',
  templateUrl: './horizontal-picklist-question.component.html',
  styleUrls: ['./horizontal-picklist-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class HorizontalPicklistQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  optionsArr:[];
  selectedValue: any;
  constructor(public formBuilder: FormBuilder,public parentForm: FormGroupDirective,) {
    console.log('horizontal picklist questionconstructor call::::child called')
   }


  ngOnInit() {
    var _this=this;
    console.log('horizontal picklist.QuestionDetail',_this.eachQuestionDetail);
   console.log('horizontal picklist.amIdWithresponse',_this.amIdWithresponse);
   console.log('horizontal picklist textthis.amresponseformGroup',_this.amresponseformGroup);
  console.log('horizontal picklist_this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
  _this.amresponseformGroup.addControl(
   [_this.eachQuestionDetail.Name],new FormControl([
     '',
     [
       Validators.required,
     ]
   ])
   );
   console.log('horizontal picklist form this.amresponseformGroup',_this.amresponseformGroup);
   _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);

   console.log('horizontal picklist after form this.amresponseformGroup',_this.amresponseformGroup);
  }
  splitOptions(strOption) {
    console.log('horizontal picklist strOption',strOption);
   var _this=this;
      var options = [];
      if(strOption && strOption.indexOf('null') == -1 ) {
        _this.optionsArr = strOption.split('~');
      }
      console.log('horizontal picklist',_this.optionsArr);
      //return options;
  
    }
    checkValue(selectedOption: any, questionDetail: any) {
      // Your logic for handling the change event here
      var _this=this;
      console.log('multi selOption',selectedOption.detail.value);
        console.log('selOption',selectedOption.detail.value,questionDetail);
        
         //amIdWithresponse[amId][eachQuestionDetail.Id]
          _this.amIdWithresponse[_this.amId][questionDetail.Id]=selectedOption.detail.value;
        
        console.log('multi _this.amIdWithresponse',_this.amIdWithresponse);
  
    }
}
