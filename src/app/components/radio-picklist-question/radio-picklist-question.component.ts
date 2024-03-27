import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-radio-picklist-question',
  templateUrl: './radio-picklist-question.component.html',
  styleUrls: ['./radio-picklist-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class RadioPicklistQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  optionsArr:[];
  selectedValue: any;

  constructor(public formBuilder: FormBuilder,public parentForm: FormGroupDirective,) {
    console.log('RadioPicklist questionconstructor call::::child called')
   }

  ngOnInit() {
    var _this=this;
    console.log('RadioPicklist this.QuestionDetail',_this.eachQuestionDetail);
   console.log('RadioPicklist this.amIdWithresponse',_this.amIdWithresponse);
   console.log('RadioPicklist textthis.amresponseformGroup',_this.amresponseformGroup);
  console.log('RadioPicklist _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
  _this.amresponseformGroup.addControl(
   [_this.eachQuestionDetail.Name],new FormControl([
     '',
     [
       Validators.required,
     ]
   ])
   );
   console.log('RadioPicklist form this.amresponseformGroup',_this.amresponseformGroup);
   _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);

   console.log('RadioPicklist after form this.amresponseformGroup',_this.amresponseformGroup);
  }
  splitOptions(strOption) {
    console.log('RadioPicklist strOption',strOption);
   var _this=this;
      var options = [];
      if(strOption && strOption.indexOf('null') == -1 ) {
        _this.optionsArr = strOption.split('~');
      }
      console.log('optionsArr',_this.optionsArr);
      //return options;
  
    }
    checkValue(event: any,selOption,QuestionDetail) {
      // Your logic for handling the change event here
      var _this=this;
      console.log('selOption',selOption);
        console.log('selOption',selOption,QuestionDetail);
        
         //amIdWithresponse[amId][eachQuestionDetail.Id]
          _this.amIdWithresponse[_this.amId][QuestionDetail.Id]=selOption;
        
        console.log('_this.amIdWithresponse',_this.amIdWithresponse);
  
    }

}
