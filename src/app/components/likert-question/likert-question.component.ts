import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-likert-question',
  templateUrl: './likert-question.component.html',
  styleUrls: ['./likert-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class LikertQuestionComponent implements OnInit {
  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  optionsArr:[];
  selectedValue: any;
  constructor(public formBuilder: FormBuilder,public parentForm: FormGroupDirective,) {
    console.log('Likrt questionconstructor call::::child called')
   }

  ngOnInit() {
    var _this=this;
    console.log('Likrt.QuestionDetail',_this.eachQuestionDetail);
   console.log('Likrt.amIdWithresponse',_this.amIdWithresponse);
   console.log('Likrt textthis.amresponseformGroup',_this.amresponseformGroup);
  console.log('Likrt_this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
  _this.amresponseformGroup.addControl(
   [_this.eachQuestionDetail.Name],new FormControl([
     '',
     [
       Validators.required,
     ]
   ])
   );
   console.log('Likrt form this.amresponseformGroup',_this.amresponseformGroup);
   _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);

   console.log('Likrt after form this.amresponseformGroup',_this.amresponseformGroup);
  }
  splitOptions(strOption) {
    console.log('Likrt strOption',strOption);
   var _this=this;
      var options = [];
      if(strOption && strOption.indexOf('null') == -1 ) {
        _this.optionsArr = strOption.split('~');
      }
      console.log('Likrt',_this.optionsArr);
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
