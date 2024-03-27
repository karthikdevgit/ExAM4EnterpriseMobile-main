import { Component,Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators,FormGroupDirective,ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-button-question',
  templateUrl: './button-question.component.html',
  styleUrls: ['./button-question.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]

})
export class ButtonQuestionComponent implements OnInit {

  @Input() eachQuestionDetail:any;
  @Input() amIdWithresponse:any;
  @Input() amresponseformGroup:any;
  @Input() amId:any;
  optionsArr:[];
  constructor(public formBuilder: FormBuilder,public parentForm: FormGroupDirective,) {
    console.log('button questionconstructor call::::child called')
   }
  ngOnInit() {
     var _this=this;
     console.log('button this.QuestionDetail',_this.eachQuestionDetail);
    console.log('button this.amIdWithresponse',_this.amIdWithresponse);
    console.log('button textthis.amresponseformGroup',_this.amresponseformGroup);
   console.log('button _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]');
   _this.amresponseformGroup.addControl(
    [_this.eachQuestionDetail.Name],new FormControl([
      '',
      [
        Validators.required,
      ]
    ])
    );
    console.log('button form this.amresponseformGroup',_this.amresponseformGroup);

  
  //   console.log('ngOnInit this.QuestionDetail',_this.eachQuestionDetail);
  //   console.log('ngOnInit this.amIdWithresponse',_this.amIdWithresponse);
  //   console.log('ngOnInit this.amresponseformGroup',_this.amresponseformGroup);
  //  console.log(' _this.amresponseformGroup[_this.amId][_this.eachQuestionDetail]',
  //  _this.eachQuestionDetail.ExAM__Subquestion_Label__c);
  //  // splitOptions(eachQuestionDetail.ExAM__Subquestion_Label__c) track by $index

  //  _this.amresponseformGroup = _this.formBuilder.group({
  //   [_this.eachQuestionDetail.Name]: [
  //     '',
  //     [
  //       Validators.required,
  //     ]
  //   ]
  //   })
    _this.splitOptions(_this.eachQuestionDetail.ExAM__Subquestion_Label__c);

    console.log('after form this.amresponseformGroup',_this.amresponseformGroup);
  }
  setSelectedOption(index,selOption,QuestionDetail) {
    var _this=this;
    console.log('selOption',index,selOption);
      console.log('selOption',selOption,QuestionDetail);
      
       //amIdWithresponse[amId][eachQuestionDetail.Id]
        _this.amIdWithresponse[_this.amId][QuestionDetail.Id]=selOption;
      
      console.log('_this.amIdWithresponse',_this.amIdWithresponse);

  
    }
 splitOptions(strOption) {
  console.log('strOption',strOption);
 var _this=this;
    var options = [];
    if(strOption && strOption.indexOf('null') == -1 ) {
      _this.optionsArr = strOption.split('~');
    }
    console.log('optionsArr',_this.optionsArr);
    //return options;

  }
}
